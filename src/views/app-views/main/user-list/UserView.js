import React, {Component} from 'react';
import 'antd/lib/drawer/style/index.css';
import {Avatar, Drawer, Divider} from 'antd';
import {
    MobileOutlined,
    MailOutlined,
    UserOutlined,
    CompassOutlined,
    LaptopOutlined,
    HomeOutlined
} from '@ant-design/icons';




export const UserView = ({data, visible, close}) => {
    return (
        <Drawer
            width={300}
            placement="right"
            onClose={close}
            closable={false}
            visible={visible}
        >
            <div className="text-center mt-3">
                <Avatar size={80} src={data?.img}/>
                <h3 className="mt-2 mb-0">{data?.name}</h3>
            </div>
            <Divider dashed/>
            <div className="">
                <h6 className="text-muted text-uppercase mb-3">Account details</h6>
                <p>
                    <UserOutlined/>
                    <span className="ml-3 text-dark">Nick: {data?.username}</span>
                </p>
            </div>
            <div className="mt-5">
                <h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
                <p>
                    <MobileOutlined/>
                    <span className="ml-3 text-dark">{data?.phone}</span>
                </p>
                <p>
                    <HomeOutlined/>
                    <span className="ml-3 text-dark">City: {data?.address.city}</span>
                </p>
                <p>
                    <MailOutlined/>
                    <span className="ml-3 text-dark">{data?.email ? data?.email : '-'}</span>
                </p>
                <p>
                    <CompassOutlined/>
                    <span className="ml-3 text-dark">{data?.website}</span>
                </p>
                <p>
                    <LaptopOutlined/>
                    <span className="ml-3 text-dark">Company: {data?.company.name}</span>
                </p>
            </div>
        </Drawer>

    )
}

export default UserView
