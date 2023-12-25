import React from 'react';

const Toolbar = ({exportFile, importFile, setCurrentAction, actions, currentAction}) => {

    const toolbarActions = actions.map(({id, name, type, data}) => {
        const onClickAction = () => {
            setCurrentAction({
                id,
                type,
                data
            })
        }

        const active = id === currentAction.id ? 'toolbarItem_active' : ''


        return (
            <button key={id}
                    title={name}
                    onClick={onClickAction}
                    className={`toolbarItem ${active}`}>
                {name}
            </button>
        )
    });

    return (
        <div className='toolbar'>
            {toolbarActions}
            <button
                onClick={importFile}
                className='buttonAction'>
                Export
            </button>
            <div>
                <label>
                    <input type="file"
                           onChange={exportFile}
                           style={{display: 'none'}}
                    />
                    <div className='buttonAction'>
                        Import
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Toolbar;