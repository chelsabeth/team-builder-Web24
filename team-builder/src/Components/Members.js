import React from "react";

const Members = props => {
    console.log("this is from Members", props);
    return (
        <div className="members-list">
            {props.membersList.map((members, index) => {
                return (
                    <div className="member" key={index}>
                        <h2>{members.name}</h2>
                        <p>{members.email}</p>
                        <p>{members.role}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Members;