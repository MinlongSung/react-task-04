import React from "react";

import { AppLayout } from "@/layouts/app.layout";
import { MemberListContainer } from "@/pods/member-list";
import { MemberDetailContainer } from "@/pods/member-detail";

export const MemberListScene: React.FC = () => {
    const [selectedMember, setSelectedMember] = React.useState<string>("");

    const handleSelect = (login: string) => {
        setSelectedMember(login);
    };

    return (
        <AppLayout>
            <div className="member-scene-container">
                <div>
                    <MemberListContainer onSelect={handleSelect} />
                </div>
                <div>
                    {selectedMember && <MemberDetailContainer login={selectedMember} onSelect={handleSelect}/>}
                </div>
            </div>
        </AppLayout>
    );
}