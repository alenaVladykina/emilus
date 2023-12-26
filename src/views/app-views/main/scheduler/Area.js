import React from 'react';

const Area = ({tables, refElement, handleMouseDown, handleMouseUp}) => {

    const tableList = tables.map(({id, x, y, width, height, image}) => {

        const style = {
            top: y + "px",
            left: x + "px",
            width,
            height,
             background: `url(/emilus/img/tables/${image})`
        }

        return (
            <div key={id}
                 style={style}
                 className={'box'}/>
        )
    })
    return (
        <div className='area'
             ref={refElement}
             onMouseDown={handleMouseDown}
             onMouseUp={handleMouseUp}
        >
            {tableList}
        </div>
    );
};

export default Area;