

const Skills = () => {
    return (
        <div name='Skills' className="pt-40 min-h-screen px-10">
            <h1 className="text-4xl inline border-b-4 font-bold">Skills</h1>
            <p className="text-3xl mt-5 font-semibold">The Techonlogys I use</p>
            <div className="item-center mt-10 flex justify-center gap-5 ">
                <img className="h-24" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNFNjUxMDAiIGQ9Ik00MSw1SDdsMywzNGwxNCw0bDE0LTRMNDEsNUw0MSw1eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGRjZEMDAiIGQ9Ik0yNCA4TDI0IDM5LjkgMzUuMiAzNi43IDM3LjcgOHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjQsMjV2LTRoOC42bC0wLjcsMTEuNUwyNCwzNS4xdi00LjJsNC4xLTEuNGwwLjMtNC41SDI0eiBNMzIuOSwxN2wwLjMtNEgyNHY0SDMyLjl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTI0LDMwLjl2NC4ybC03LjktMi42TDE1LjcsMjdoNGwwLjIsMi41TDI0LDMwLjl6IE0xOS4xLDE3SDI0di00aC05LjFsMC43LDEySDI0di00aC00LjZMMTkuMSwxN3oiPjwvcGF0aD4KPC9zdmc+" />
                <img className="h-24" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwMjc3QkQiIGQ9Ik00MSw1SDdsMywzNGwxNCw0bDE0LTRMNDEsNUw0MSw1eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMzlCRTUiIGQ9Ik0yNCA4TDI0IDM5LjkgMzUuMiAzNi43IDM3LjcgOHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMzMuMSAxM0wyNCAxMyAyNCAxNyAyOC45IDE3IDI4LjYgMjEgMjQgMjEgMjQgMjUgMjguNCAyNSAyOC4xIDI5LjUgMjQgMzAuOSAyNCAzNS4xIDMxLjkgMzIuNSAzMi42IDIxIDMyLjYgMjF6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTI0LDEzdjRoLTguOWwtMC4zLTRIMjR6IE0xOS40LDIxbDAuMiw0SDI0di00SDE5LjR6IE0xOS44LDI3aC00bDAuMyw1LjVsNy45LDIuNnYtNC4ybC00LjEtMS40TDE5LjgsMjd6Ij48L3BhdGg+Cjwvc3ZnPg==" />
                <img className="h-24" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNmZmQ2MDAiIGQ9Ik02LDQyVjZoMzZ2MzZINnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAwMDAxIiBkPSJNMjkuNTM4IDMyLjk0N2MuNjkyIDEuMTI0IDEuNDQ0IDIuMjAxIDMuMDM3IDIuMjAxIDEuMzM4IDAgMi4wNC0uNjY1IDIuMDQtMS41ODUgMC0xLjEwMS0uNzI2LTEuNDkyLTIuMTk4LTIuMTMzbC0uODA3LS4zNDRjLTIuMzI5LS45ODgtMy44NzgtMi4yMjYtMy44NzgtNC44NDEgMC0yLjQxIDEuODQ1LTQuMjQ0IDQuNzI4LTQuMjQ0IDIuMDUzIDAgMy41MjguNzExIDQuNTkyIDIuNTczbC0yLjUxNCAxLjYwN2MtLjU1My0uOTg4LTEuMTUxLTEuMzc3LTIuMDc4LTEuMzc3LS45NDYgMC0xLjU0NS41OTctMS41NDUgMS4zNzcgMCAuOTY0LjYgMS4zNTQgMS45ODUgMS45NTFsLjgwNy4zNDRDMzYuNDUyIDI5LjY0NSAzOCAzMC44MzkgMzggMzMuNTIzIDM4IDM2LjQxNSAzNS43MTYgMzggMzIuNjUgMzhjLTIuOTk5IDAtNC43MDItMS41MDUtNS42NS0zLjM2OEwyOS41MzggMzIuOTQ3ek0xNy45NTIgMzMuMDI5Yy41MDYuOTA2IDEuMjc1IDEuNjAzIDIuMzgxIDEuNjAzIDEuMDU4IDAgMS42NjctLjQxOCAxLjY2Ny0yLjA0M1YyMmgzLjMzM3YxMS4xMDFjMCAzLjM2Ny0xLjk1MyA0Ljg5OS00LjgwNSA0Ljg5OS0yLjU3NyAwLTQuNDM3LTEuNzQ2LTUuMTk1LTMuMzY4TDE3Ljk1MiAzMy4wMjl6Ij48L3BhdGg+Cjwvc3ZnPg==" />
                <img className="h-24" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwMGFjYzEiIGQ9Ik0yNCw5LjYwNGMtNi40LDAtMTAuNCwzLjE5OS0xMiw5LjU5N2MyLjQtMy4xOTksNS4yLTQuMzk4LDguNC0zLjU5OSBjMS44MjYsMC40NTYsMy4xMzEsMS43ODEsNC41NzYsMy4yNDdDMjcuMzI4LDIxLjIzNiwzMC4wNTEsMjQsMzYsMjRjNi40LDAsMTAuNC0zLjE5OSwxMi05LjU5OGMtMi40LDMuMTk5LTUuMiw0LjM5OS04LjQsMy42IGMtMS44MjUtMC40NTYtMy4xMy0xLjc4MS00LjU3NS0zLjI0N0MzMi42NzIsMTIuMzY3LDI5Ljk0OCw5LjYwNCwyNCw5LjYwNEwyNCw5LjYwNHogTTEyLDI0Yy02LjQsMC0xMC40LDMuMTk5LTEyLDkuNTk4IGMyLjQtMy4xOTksNS4yLTQuMzk5LDguNC0zLjU5OWMxLjgyNSwwLjQ1NywzLjEzLDEuNzgxLDQuNTc1LDMuMjQ2YzIuMzUzLDIuMzg4LDUuMDc3LDUuMTUyLDExLjAyNSw1LjE1MiBjNi40LDAsMTAuNC0zLjE5OSwxMi05LjU5OGMtMi40LDMuMTk5LTUuMiw0LjM5OS04LjQsMy41OTljLTEuODI2LTAuNDU2LTMuMTMxLTEuNzgxLTQuNTc2LTMuMjQ2QzIwLjY3MiwyNi43NjQsMTcuOTQ5LDI0LDEyLDI0IEwxMiwyNHoiPjwvcGF0aD4KPC9zdmc+" />
                <img className="h-24 w-24" src="https://cdn.icon-icons.com/icons2/3914/PNG/512/daisyui_logo_icon_249080.png" alt="" />
                <img className="h-24 w-24" src="https://cdn.icon-icons.com/icons2/2248/PNG/512/material_ui_icon_137419.png" alt="" />
                <img className="h-24 w-24" src="https://i.ibb.co/7tL2Q47/icons8-react-native-24.png" alt="" />
                <img className="h-24 w-24" src="https://www.svgrepo.com/show/354090/mongodb.svg" alt="" />
                <img  className="h-24 w-24" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNmZjhmMDAiIGQ9Ik04LDM3TDIzLjIzNCw4LjQzNmMwLjMyMS0wLjYwMiwxLjE4OS0wLjU5MSwxLjQ5NCwwLjAyTDMwLDE5TDgsMzd6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmYTAwMCIgZD0iTTgsMzYuOTkybDUuNTQ2LTM0LjE5OWMwLjE0NS0wLjg5NSwxLjM0Ny0xLjA4OSwxLjc2Ny0wLjI4NUwyNiwyMi45OTJMOCwzNi45OTJ6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmNmYwMCIgZD0iTTguMDA4IDM2Ljk4Nkw4LjIwOCAzNi44MjkgMjUuNzM3IDIyLjQ4OCAyMC43OTMgMTMuMDEyeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmM0MDAiIGQ9Ik04LDM3bDI2LjY2Ni0yNS43MTNjMC41NTktMC41MzksMS40OTItMC4yMjEsMS42MDYsMC41NDdMNDAsMzdsLTE1LDguNzQzIGMtMC42MDksMC4zNDItMS4zNTIsMC4zNDItMS45NjEsMEw4LDM3eiI+PC9wYXRoPgo8L3N2Zz4=" />
            </div>
            <div className="item-center mt-10 flex justify-center gap-5 ">
                <img  className="h-24 w-24" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/800px-Vitejs-logo.svg.png" alt="" />
                <img  className="h-20 w-36" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png" alt="" />
                <img  className="h-24 w-24" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMyMWEzNjYiIGQ9Ik0yNC4wMDcsNDUuNDE5Yy0wLjU3NCwwLTEuMTQzLTAuMTUtMS42NDYtMC40NGwtNS4yNC0zLjEwM2MtMC43ODMtMC40MzgtMC40MDEtMC41OTMtMC4xNDMtMC42ODIJYzEuMDQ0LTAuMzY1LDEuMjU1LTAuNDQ4LDIuMzY5LTEuMDgxYzAuMTE3LTAuMDY3LDAuMjctMC4wNDMsMC4zOSwwLjAyOGw0LjAyNiwyLjM4OWMwLjE0NSwwLjA3OSwwLjM1MiwwLjA3OSwwLjQ4NiwwbDE1LjY5Ny05LjA2MQljMC4xNDUtMC4wODMsMC4yNC0wLjI1MSwwLjI0LTAuNDI0VjE0LjkzMmMwLTAuMTgxLTAuMDk0LTAuMzQyLTAuMjQzLTAuNDMyTDI0LjI1Myw1LjQ0NmMtMC4xNDUtMC4wODYtMC4zMzgtMC4wODYtMC40ODMsMAlMOC4wODIsMTQuNDk5Yy0wLjE1MiwwLjA4Ni0wLjI0OSwwLjI1NS0wLjI0OSwwLjQyOHYxOC4xMTRjMCwwLjE3MywwLjA5NCwwLjMzOCwwLjI0NCwwLjQybDQuMjk5LDIuNDgzCWMyLjMzNCwxLjE2NywzLjc2LTAuMjA4LDMuNzYtMS41OTFWMTYuNDc2YzAtMC4yNTUsMC4yLTAuNDUyLDAuNDU2LTAuNDUyaDEuOTg4YzAuMjQ4LDAsMC40NTIsMC4xOTYsMC40NTIsMC40NTJ2MTcuODg2CWMwLDMuMTEyLTEuNjk3LDQuOS00LjY0OCw0LjljLTAuOTA4LDAtMS42MjMsMC0zLjYxOS0wLjk4MmwtNC4xMTgtMi4zNzNDNS42MjksMzUuMzE3LDUsMzQuMjE2LDUsMzMuMDQyVjE0LjkyOAljMC0xLjE3OSwwLjYyOS0yLjI3OSwxLjY0Ni0yLjg2MUwyMi4zNiwzLjAwMmMwLjk5NC0wLjU2MiwyLjMxNC0wLjU2MiwzLjMwMSwwbDE1LjY5NCw5LjA2OUM0Mi4zNjcsMTIuNjU2LDQzLDEzLjc1Myw0MywxNC45MzIJdjE4LjExNGMwLDEuMTc1LTAuNjMzLDIuMjcxLTEuNjQ2LDIuODYxTDI1LjY2LDQ0Ljk3MWMtMC41MDMsMC4yOTEtMS4wNzMsMC40NC0xLjY1NCwwLjQ0Ij48L3BhdGg+PHBhdGggZmlsbD0iIzIxYTM2NiIgZD0iTTI4Ljg1NiwzMi45MzdjLTYuODY4LDAtOC4zMDgtMy4xNTMtOC4zMDgtNS43OTdjMC0wLjI1MSwwLjIwMy0wLjQ1MiwwLjQ1NS0wLjQ1MmgyLjAyOAljMC4yMjQsMCwwLjQxMywwLjE2MywwLjQ0OCwwLjM4NGMwLjMwNiwyLjA2NiwxLjIxOCwzLjEwOCw1LjM3MSwzLjEwOGMzLjMwOCwwLDQuNzE1LTAuNzQ3LDQuNzE1LTIuNTAyCWMwLTEuMDEtMC40MDEtMS43Ni01LjU0LTIuMjYzYy00LjI5OS0wLjQyNC02Ljk1NS0xLjM3MS02Ljk1NS00LjgwOWMwLTMuMTY3LDIuNjcyLTUuMDUzLDcuMTQ3LTUuMDUzCWM1LjAyNiwwLDcuNTE3LDEuNzQ1LDcuODMxLDUuNDkzYzAuMDEyLDAuMTMtMC4wMzUsMC4yNTUtMC4xMjIsMC4zNWMtMC4wODYsMC4wOS0wLjIwOCwwLjE0NS0wLjMzNCwwLjE0NWgtMi4wMzkJYy0wLjIxMiwwLTAuMzk3LTAuMTQ5LTAuNDQtMC4zNTRjLTAuNDkxLTIuMTczLTEuNjc4LTIuODY4LTQuOTA0LTIuODY4Yy0zLjYxMSwwLTQuMDMxLDEuMjU3LTQuMDMxLDIuMgljMCwxLjE0MywwLjQ5NSwxLjQ3Nyw1LjM2NywyLjEyMmM0LjgyNSwwLjY0LDcuMTE2LDEuNTQ0LDcuMTE2LDQuOTM1YzAsMy40MTgtMi44NTMsNS4zNzktNy44MjcsNS4zNzkiPjwvcGF0aD4KPC9zdmc+"/>
                <img  className="h-24 w-24" src="https://i.ibb.co/C8S23DW/t-vercel1868-removebg-preview.png" alt="" />
                <img  className="h-24 w-24" src="https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png" alt="" />
                <img  className="h-24 w-24" src="https://i.ibb.co/xFjVt0B/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail-removebg-preview.png" alt="" />
            </div>
        </div>
    
    );
};

export default Skills;