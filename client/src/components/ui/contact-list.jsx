import { useAppStore } from "@/store";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { HOST } from "@/utlis/constants";
import { getColor } from "@/lib/utils";
const ContactList = ({contacts,isChannel = false}) => {

    const {contact,setSelectedChatData,selectedChatType,setSelectedChatType,
        setSelectedChatMessages,selectedChatData
    }=useAppStore();


    const handleCLick = (contact) => {
      if(isChannel){
        setSelectedChatType("channel");
      }else{
        setSelectedChatType("contact");
        setSelectedChatData(contact);
      }
      if(contact && contact._id === contact._id){
        setSelectedChatMessages([]);
      }
    }
  return (
    <div className="mt-5">
    {contacts.map((contact) => (
      <div key={contact._id}  className={`pl-10 py-2 transition-all duration-300 cursor-pointer ${
        selectedChatData && selectedChatData._id === contact._id
          ? "bg-[#8417ff]" // Selected state (Persistent)
          : "hover:bg-[#1f1f11]" // Hover state (Temporary)
      }`}
      onClick={() => handleCLick(contact)}>
        <div className="flex gap-5 items-center justify-start text-neutral-300">
          {
            !isChannel && (<Avatar className="h-10 w-10  relative flex items-center justify-center overflow-hidden rounded-full">
            {contact.image ? (
              <AvatarImage
                src={`${HOST}/${contact.image}`}
                alt="Profile"
                className="object-cover w-full h-full  bg-black"
              />
            ) : (
              <div
                className={`
                  ${selectedChatData && selectedChatData._id === contact._id ? "bg-[ffffff22] border-2 border-white/70" : getColor(contact.color)}
                  uppercase h-10 w-10  text-lg border-[1px] flex items-center justify-center rounded-full `}
              >
                {contact.firstName
                  ? contact.firstName.split("").shift()
                  : contact.email.split("").shift() || ""}
              </div>
            )}
          </Avatar>

          )}
          {
            isChannel && <div className="bg-[#ffffff22] h-10 w-10 flex items-center justify-center rounded-full">#</div>
          }
          {
            isChannel ? <span>{contact.name}</span> : <span>{`${contact.firstName} ${contact.lastName}`}</span>
          }
        </div>
      </div>
    ))}

  </div>
  );
};

export default ContactList