import { useAppStore } from "@/store";
import { useNavigate } from "react-router-dom";

function Chat() {
  const { userInfo } = useAppStore();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("info found", userInfo);
    if (!userInfo?.profileSetup) {
      toast("Please setup your profile to continue");
      navigate("/profile");
    }
  }, [userInfo, navigate]);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold">Chat</h1>
      <p className="text-lg">This is the chat page</p>
    </div>
  );
}

export default Chat;
