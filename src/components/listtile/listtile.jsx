import "./listtile.scss";

export default function ListTile({leadingIcon,title,subTitle}){
    return (
        <div className="mainLayout">
            <img src={leadingIcon} alt="Leading" className="icon"/>
            <div className="textSection">
                <h5>{title}</h5>
                <span>{subTitle}</span>
            </div>
        </div>
    );
}