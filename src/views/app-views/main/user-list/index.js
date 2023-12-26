import {connect} from "react-redux";
import {useEffect, useState} from "react";
import UserView from "./UserView";
import {Button, Card, Table, Tooltip} from "antd";
import AvatarStatus from "../../../../components/shared-components/AvatarStatus";
import {DeleteOutlined, EyeOutlined, LoadingOutlined} from '@ant-design/icons'
import {fetchUserAction, userDeleteSagaAction} from "../../../../redux/actions/UsesActions";


const UserList = ({users, fetchUserAction, userDeleteSagaAction, isLoad}) => {
    const [userProfileVisible, setUserProfileVisible] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)


    useEffect(() => {
        fetchUserAction();
    }, [])


    const deleteUser = userId => {
        userDeleteSagaAction(userId);
    }

    const showUserProfile = userInfo => {
        setUserProfileVisible(true);
        setSelectedUser(userInfo);
    };

    const closeUserProfile = () => {
        setUserProfileVisible(false);
        setSelectedUser(null);
    }


    const tableColumns = [
        {
            title: 'User',
            dataIndex: 'name',
            render: (_, record) => (
                <div className="d-flex">
                    <AvatarStatus name={record.name} subTitle={record.email}/>
                </div>
            ),
            sorter: {
                compare: (a, b) => {
                    a = a.name.toLowerCase();
                    b = b.name.toLowerCase();
                    return a > b ? -1 : b > a ? 1 : 0;
                },
            },
        },
        {
            title: 'Login',
            dataIndex: 'username',
            render: (name) => (
                <span>{name}</span>
            ),
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            render: phone => (
                <span>{phone}</span>
            ),
        },
        {
            title: 'Website',
            dataIndex: 'website',
            render: website => (
                <span>{website}</span>
            ),
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (_, elm) => (
                <div className="text-right">
                    <Tooltip title="View">
                        <Button type="primary" className="mr-2" icon={<EyeOutlined/>} onClick={() => {
                            showUserProfile(elm)
                        }} size="small"/>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button danger icon={<DeleteOutlined/>} onClick={() => {
                            deleteUser(elm.id)
                        }} size="small"/>
                    </Tooltip>
                </div>
            )
        }
    ];


    return (

        <Card bodyStyle={{'padding': '0px'}}>
            {isLoad && <LoadingOutlined style={{fontSize: 35}} spin/>}
            <Table columns={tableColumns} dataSource={users} rowKey='id'/>
            <UserView data={selectedUser} visible={userProfileVisible} close={() => {
                closeUserProfile()
            }}/>

        </Card>
    )
}


const mapStateToProps = ({users}) => {
    return {
        users: users.users,
        isLoad: users.isLoad,
    };
}

export default connect(mapStateToProps, {fetchUserAction, userDeleteSagaAction})(UserList);


