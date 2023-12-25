import React, {useEffect, useRef, useState} from 'react';
import Area from "./Area";
import {actions, dataTables} from "./data";
import {uuid} from "../../../../utils";
import Toolbar from "./Toolbar";


dataTables.forEach((data) => {
    actions.push({
        id: data.id,
        name: data.name,
        type: 'create',
        data
    });
});

const Map = () => {
    const [isDrawing, setIsDrawing] = useState(false);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [currentElement, setCurrentElement] = useState(null);
    const [currentAction, setCurrentAction] = useState({});
    const ref = useRef(null);
    const [tables, setTables] = useState([])


    useEffect(() => {
        if (isDrawing) {
            document.addEventListener("mousemove", handleMouseMove);
        } else {
            document.removeEventListener("mousemove", handleMouseMove);
        }

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        }
    }, [isDrawing])


    const handleMouseDown = (event) => {
        if (currentAction.type === "point" && event.target && event.target.className === 'box') {
            setIsDrawing(true);
            setCurrentElement(event.target);
            setOffsetX(event.nativeEvent.offsetX);
            setOffsetY(event.nativeEvent.offsetY);
        }
    };

    const handleMouseUp = (e) => {
        if (currentAction.type === "point") {
            setIsDrawing(false);
            setCurrentElement(null);
            setOffsetX(0);
            setOffsetY(0);
        }

        if (currentAction.type === "create") {
            createTable(e);
        }
    };

    const handleMouseMove = (event) => {
        if (isDrawing) {
            const x = event.clientX;
            const y = event.clientY;
            const areaCoords = ref.current.getBoundingClientRect();

            const posX = x - areaCoords.left - offsetX;
            const posY = y - areaCoords.top - offsetY;

            const xx = Math.max(0, Math.min(posX, areaCoords.width - currentElement.offsetWidth));
            const yy = Math.max(0, Math.min(posY, areaCoords.height - currentElement.offsetHeight));

            currentElement.style.left = xx + 'px';
            currentElement.style.top = yy + 'px';
        }
    };


    const createTable = (e) => {
        const areaCoords = ref.current.getBoundingClientRect();
        const {width, height, image, id} = currentAction.data
        setTables([...tables,
            {
                id: uuid(),
                x: e.clientX - areaCoords.left - width / 2,
                y: e.clientY - areaCoords.top - height / 2,
                width,
                height,
                image,
                name: id
            }
        ])
    };


    const importFile = () => {
        const data = JSON.stringify(tables.map(({name, x, y}) => ({id: name, x: Math.floor(x), y: Math.floor(y)})))
        const blob = new Blob([data]);
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');

        link.href = downloadUrl;
        link.download = "tables.json";

        link.dispatchEvent(
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            })
        );

        setTimeout(() => {
            window.URL.revokeObjectURL(downloadUrl);
            link.remove();
        }, 100);
    }

    const exportFile = (e) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.readAsText(file);

            reader.onload = function () {
                const data = JSON.parse(reader.result);
                setTables(data.map(({x, y, id}) => {
                    const table = dataTables.find((table) => table.id === id);

                    return {
                        ...table,
                        id: uuid(),
                        name: table.id,
                        x,
                        y,
                    }
                }));
            };

            reader.onerror = function () {
                console.log(reader.error);
            };
        }
    }


    return (
        <div className='scheduler'>
            <Toolbar currentAction={currentAction}
                     setCurrentAction={setCurrentAction}
                     actions={actions}
                     importFile={importFile}
                     exportFile={exportFile}/>
            <Area tables={tables}
                  handleMouseUp={handleMouseUp}
                  refElement={ref}
                  handleMouseDown={handleMouseDown}/>

        </div>
    );
};

export default Map;
