import { Tooltip, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import Avatar from "../../../shared/components/Avatar";
import InvitationDecisionButtons from  "./InvitationDecisionButtons";

const PendingInvitationsListItem = ({
  id,
  username,
  email,
  acceptFriendInvitation = ()  => {},
  rejectFriendInvitation = () => {},
  }) => {
    const [buttonsDisabled, setButtonsDisabld] = useState(false);

    const handleAcceptinvitation = () => {
      acceptFriendInvitation({ id });
      setButtonsDisabld(true);    
    }

    const handleRejectinvitation = () => {
      rejectFriendInvitation({ id });
      setButtonsDisabld(true);    
    }
  
  return <Tooltip title={email}>
      <div style={{ width: "100%" }}>
        <Box 
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyItems: "space-between"
          }}
        >
          <Avatar username={username} />
          <Typography 
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: 1,
            }}
            variant="subtitle"
          >{username}
        </Typography>
        <InvitationDecisionButtons
            disabled={buttonsDisabled}
            acceptFriendInvitation={handleAcceptinvitation}
            rejectFriendInvitation={handleRejectinvitation}
        />
        </Box>
      </div>
    </Tooltip>
  
};



export default PendingInvitationsListItem;