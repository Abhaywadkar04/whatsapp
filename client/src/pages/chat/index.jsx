import React from "react";
import { useEffect } from "react";
import { toast } from "sonner";
import { useAppStore } from "@/store";
import { useNavigate } from "react-router-dom";

function chat() {
  const { userInfo } = useAppStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo.ProfileSetup) {
      toast("please setup your profile to continue");
      navigate("/profile");
    }
  }, [userInfo, navigate]);
  return <div>chat</div>;
}

export default chat;
