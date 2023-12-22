import {
    DashboardOutlined,
    ShoppingOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    PictureOutlined,
    GiftOutlined,
    UsergroupAddOutlined,
    ShopOutlined,
    MailOutlined,
    SettingOutlined,
    MobileOutlined,
    FileOutlined
} from '@ant-design/icons';


import {APP_PREFIX_PATH} from 'configs/AppConfig'

const dashBoardNavTree = [{
    key: 'main',
    path: `${APP_PREFIX_PATH}/main`,
    title: 'Основное',
    icon: '',
    breadcrumb: false,
    submenu: [
        {
            key: 'dashboards',
            path: `${APP_PREFIX_PATH}/main/dashboards`,
            title: 'Дашборд',
            icon: DashboardOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'main-catalog',
            path: `${APP_PREFIX_PATH}/main/catalog`,
            title: 'Каталог',
            icon: ShoppingCartOutlined,
            breadcrumb: true,
            submenu: [
                {
                    key: 'main-catalog-products',
                    path: `${APP_PREFIX_PATH}/main/catalog/products`,
                    title: 'Товары',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'main-catalog-category',
                    path: `${APP_PREFIX_PATH}/main/catalog/category`,
                    title: 'Категории',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'main-catalog-collection',
                    path: `${APP_PREFIX_PATH}/main/catalog/collection`,
                    title: 'Коллекции',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'main-catalog-combo',
                    path: `${APP_PREFIX_PATH}/main/catalog/combo`,
                    title: 'Комбо',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                }
            ]
        },
        {
            key: 'main-orders',
            path: `${APP_PREFIX_PATH}/main/orders`,
            title: 'Заказы',
            icon: ShoppingOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'main-clients',
            path: `${APP_PREFIX_PATH}/main/clients`,
            title: 'Клиенты',
            icon: UserOutlined,
            breadcrumb: true,
            submenu: [
                {
                    key: 'main-clients-clientList',
                    path: `${APP_PREFIX_PATH}/main/clients/client-list`,
                    title: 'Список Клиентов',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'main-clients-clientGroup',
                    path: `${APP_PREFIX_PATH}/main/clients/client-group`,
                    title: 'Группы клиентов',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
            ]
        },
        {
            key: 'main-banners',
            path: `${APP_PREFIX_PATH}/main/banners`,
            title: 'Баннеры',
            icon: PictureOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'main-promo',
            path: `${APP_PREFIX_PATH}/main/promo`,
            title: 'Промокоды',
            icon: GiftOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'main-offlinePoint',
            path: `${APP_PREFIX_PATH}/main/offlinePoint`,
            title: 'Оффлайн точка',
            icon: ShopOutlined,
            breadcrumb: true,
            submenu: [
                {
                    key: 'main-offlinePoint-addresses',
                    path: `${APP_PREFIX_PATH}/main/offlinePoint/addresses`,
                    title: 'Адреса',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'main-offlinePoint-geofence',
                    path: `${APP_PREFIX_PATH}/main/offlinePoint/geofence`,
                    title: 'Геозоны',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
            ]
        },
        {
            key: 'main-employees',
            path: `${APP_PREFIX_PATH}/main/employees`,
            title: 'Сотрудники',
            icon: UsergroupAddOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'main-message',
            path: `${APP_PREFIX_PATH}/main/message`,
            title: 'Рассылки',
            icon: MailOutlined,
            breadcrumb: false,
            submenu: []
        },
    ]
}]

const systemNavTree = [{
    key: 'system',
    path: `${APP_PREFIX_PATH}/system`,
    title: 'Системные',
    icon: '',
    breadcrumb: false,
    submenu: [
        {
            key: 'system-settings',
            path: `${APP_PREFIX_PATH}/system/settings`,
            title: 'Настройки',
            icon: SettingOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'system-app',
            path: `${APP_PREFIX_PATH}/system/app`,
            title: 'Мобильное приложение',
            icon: MobileOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'system-log',
            path: `${APP_PREFIX_PATH}/system/log`,
            title: 'Логи',
            icon: FileOutlined,
            breadcrumb: false,
            submenu: []
        },
    ]
}]


const navigationConfig = [
    ...dashBoardNavTree,
    ...systemNavTree

]

export default navigationConfig;
