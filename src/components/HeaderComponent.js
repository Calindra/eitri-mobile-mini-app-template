import Eitri from "eitri-app-client";
export default class HeaderComponent {
    onBackClick = () => { 
        Eitri.close();
    }
}
