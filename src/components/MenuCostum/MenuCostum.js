import "./MenuCostum.css";
import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";

export const MenuCostum = () => {
    const items = [
        {
            label: "File",
            icon: "pi pi-fw pi-file",
            items: [
                {
                    label: "New",
                    icon: "pi pi-fw pi-plus",
                    items: [
                        {
                            label: "Bookmark",
                            icon: "pi pi-fw pi-bookmark",
                        },
                        {
                            label: "Video",
                            icon: "pi pi-fw pi-video",
                        },
                    ],
                },
                {
                    label: "Delete",
                    icon: "pi pi-fw pi-trash",
                },
                {
                    separator: true,
                },
                {
                    label: "Export",
                    icon: "pi pi-fw pi-external-link",
                },
            ],
        },
        {
            label: "Edit",
            icon: "pi pi-fw pi-pencil",
            items: [
                {
                    label: "Left",
                    icon: "pi pi-fw pi-align-left",
                },
                {
                    label: "Right",
                    icon: "pi pi-fw pi-align-right",
                },
                {
                    label: "Center",
                    icon: "pi pi-fw pi-align-center",
                },
                {
                    label: "Justify",
                    icon: "pi pi-fw pi-align-justify",
                },
            ],
        },
        {
            label: "Users",
            icon: "pi pi-fw pi-user",
            items: [
                {
                    label: "New",
                    icon: "pi pi-fw pi-user-plus",
                },
                {
                    label: "Delete",
                    icon: "pi pi-fw pi-user-minus",
                },
                {
                    label: "Search",
                    icon: "pi pi-fw pi-users",
                    items: [
                        {
                            label: "Filter",
                            icon: "pi pi-fw pi-filter",
                            items: [
                                {
                                    label: "Print",
                                    icon: "pi pi-fw pi-print",
                                },
                            ],
                        },
                        {
                            icon: "pi pi-fw pi-bars",
                            label: "List",
                        },
                    ],
                },
            ],
        },
        {
            label: "Events",
            icon: "pi pi-fw pi-calendar",
            items: [
                {
                    label: "Edit",
                    icon: "pi pi-fw pi-pencil",
                    items: [
                        {
                            label: "Save",
                            icon: "pi pi-fw pi-calendar-plus",
                        },
                        {
                            label: "Delete",
                            icon: "pi pi-fw pi-calendar-minus",
                        },
                    ],
                },
                {
                    label: "Archieve",
                    icon: "pi pi-fw pi-calendar-times",
                    items: [
                        {
                            label: "Remove",
                            icon: "pi pi-fw pi-calendar-minus",
                        },
                    ],
                },
            ],
        },
        {
            label: "Quit",
            icon: "pi pi-fw pi-power-off",
        },
    ];

    const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => (e.target.src = "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")} height="40" classNameName="mr-2"></img>;
    const end = <InputText placeholder="Search" type="text" />;

    return (
        <div className="cu">
            <ul>
                <li className="a">
                    <a href="">
                        {" "}
                        <i className="pi pi-home" />
                        ACCEUIL
                    </a>
                </li>
                <li className="b">
                    <a href="">
                        <i className="pi pi-search" /> A PROPOS
                    </a>
                </li>
                <li className="c">
                    <a href="">
                        <i className="pi pi-book" /> PRINCIPALES ETUDES
                    </a>
                </li>
                <li className="d">
                    <a href="">
                        <i className="pi pi-images" />
                        GALERIE
                    </a>
                </li>
                <li className="e">
                    <a href="">
                        <i className="pi pi-user-edit" />
                        BLOG
                    </a>
                </li>
                <li className="f">
                    <a href="">
                        <i className="pi pi-whatsapp" />
                        CONTACT-US
                    </a>
                </li>
                <br />
            </ul>
            <div className="po"> Agro Etudes</div>
            <div className="lo">Spécialisé en études d’Aménagement Hydrau-agricoles</div>
        </div>
    );
};
