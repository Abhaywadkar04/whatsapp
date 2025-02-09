// import { useAppStore } from "@/store";
// import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
// import { HOST } from "@/utlis/constants";
// import { getColor } from "@/lib/utils";

// const ContactList = ({contacts,isChannel = false}) => {


//     const {setSelectedChatData,selectedChatType,setSelectedChatType,
//         setSelectedChatMessages,selectedChatData
//     }=useAppStore();


//     const handleCLick = (contact) => {
//       if(isChannel){
//         setSelectedChatType("channel");
//       }else{
//         setSelectedChatType("contact");
//         setSelectedChatData(contact);
//       }
//       if(selectedChatData && selectedChatData._id !== contact._id){
//         setSelectedChatMessages([]);
//       }
//     }
//   return (
//     <div className="mt-5">
//     {contacts.map((contact) => (
//       <div key={contact._id}  className={`pl-10 py-2 transition-all duration-300 cursor-pointer ${
//         selectedChatData && selectedChatData._id === contact._id
//           ? "bg-[#8417ff]" // Selected state (Persistent)
//           : "hover:bg-[#1f1f11]" // Hover state (Temporary)
//       }`}
//       onClick={() => handleCLick(contact)}>
//         <div className="flex gap-5 items-center justify-start text-neutral-300">
//           {
//             !isChannel && (<Avatar className="h-10 w-10  relative flex items-center justify-center overflow-hidden rounded-full">
//             {contact.image ? (
//               <AvatarImage
//                 src={`${HOST}/${contact.image}`}
//                 alt="Profile"
//                 className="object-cover w-full h-full  bg-black"
//               />
//             ) : (
//               <div
//                 className={`
//                   ${selectedChatData && selectedChatData._id === contact._id ? "bg-[ffffff22] border-2 border-white/70" : getColor(contact.color)}
//                   uppercase h-10 w-10  text-lg border-[1px] flex items-center justify-center rounded-full `}
//               >
//                 {contact.firstName
//                   ? contact.firstName.split("").shift()
//                   : contact.email.split("").shift() || ""}
//               </div>
//             )}
//           </Avatar>

//           )}
//           {
//             isChannel && (<div className="bg-[#ffffff22] h-10 w-10 flex items-center justify-center rounded-full">#</div>)
//           }
//           {/* {
//             isChannel ? (<span>{contact.name}</span>) :( <span>{`${contact.firstName} ${contact.lastName}`}</span>)
//           } */}
//            {isChannel
//                     ? contact.name || "Unnamed Channel"
//                     : `${contact.firstName || ""} ${contact.lastName || ""}`.trim()}


//         </div>
//       </div>
//     ))}

//   </div>
//   );
// };

// export default ContactList


import { useEffect } from "react";
import { useAppStore } from "@/store";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { HOST } from "@/utlis/constants";
import { getColor } from "@/lib/utils";

const ContactList = ({ contacts, isChannel = false }) => {
  // Debugging Logs
  useEffect(() => {
    console.log("Updated Contacts Data:", contacts);
  }, [contacts, isChannel]);

  const {
    setSelectedChatData,
    setSelectedChatType,
    setSelectedChatMessages,
    selectedChatData,
  } = useAppStore();

  // Handle Contact Click
  const handleClick = (contact) => {
    if (!contact) return;

    setSelectedChatType(isChannel ? "channel" : "contact");
    setSelectedChatData(contact);
    setSelectedChatMessages([]); // Reset messages
  };

  return (
    <div className="mt-5">
      {contacts?.length > 0 ? (
        contacts.map((contact, index) => (
          contact ? ( // Ensure contact is defined before rendering
            <div
              key={contact._id || index}
              className={`pl-10 py-2 transition-all duration-300 cursor-pointer ${
                selectedChatData && selectedChatData._id === contact._id
                  ? "bg-[#8417ff]"
                  : "hover:bg-[#1f1f11]"
              }`}
              onClick={() => handleClick(contact)}
            >
              <div className="flex gap-5 items-center justify-start text-neutral-300">
                {/* Avatar for contacts */}
                {!isChannel && (
                  <Avatar className="h-10 w-10 flex items-center justify-center rounded-full">
                    {contact.image ? (
                      <AvatarImage
                        src={`${HOST}/${contact.image}`}
                        alt="Profile"
                        className="object-cover w-full h-full bg-black"
                      />
                    ) : (
                      <div
                        className={`${selectedChatData && selectedChatData._id === contact._id 
                          ? "bg-[ffffff22] border-2 border-white/70" 
                          : getColor(contact.color)
                        } uppercase h-10 w-10 text-lg flex items-center justify-center rounded-full`}
                      >
                        {contact.firstName
                          ? contact.firstName.charAt(0)
                          : contact.email?.charAt(0) || "?"}
                      </div>
                    )}
                  </Avatar>
                )}

                {/* Icon for Channels */}
                {isChannel && (
                  <div className="bg-[#ffffff22] h-10 w-10 flex items-center justify-center rounded-full">
                    #
                  </div>
                )}

                {/* Display Name */}
                <span>
                  {isChannel
                    ? contact.name || "Unnamed Channel"
                    : `${contact.firstName || ""} ${contact.lastName || ""}`.trim()}
                </span>
              </div>
            </div>
          ) : null // Skip undefined contacts
        ))
      ) : (
        <p className="text-neutral-500 text-center mt-5">No contacts available.</p>
      )}
    </div>
  );
};

export default ContactList;
