import { useState } from "react";
import "./chatscreen.css";
import axios from "axios";
import { LuSend } from "react-icons/lu";
import logo from "../../assets/img/sphinx_logo.png";
import user_logo from "../../assets/img/user.svg";




function Chatscreen() {
  const [request, setRequest] = useState("");
  const [instances, setInstances] = useState([]);


  const handlePreSubmit = () => {

    let tempInstances = instances;
    
    let instance = {owner: "me", msg: request}
    tempInstances.push(instance);
    setInstances(tempInstances);
  }

  //Requset prompt on there, change the url
  const handleSubmit = async () => {
    let tempInstances = instances;
 
    try {

      //Change your fiber url
      const response = await axios.post("YOUR_FIBER_URL", {
        Request: request,
      });
      
      if (response.status === 200) {
        let instance = {owner: "bot", msg: response.data}
        tempInstances.push(instance)
        setRequest('');
        console.log(instance)
        setInstances(tempInstances);
      } else {
        alert("An error occurred while sending the text!");
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
   
  };

  return (
    <div>
      <div className="overflow-auto w-full min-h-[640px] max-h-[640px] text-center bg-white border border-gray-200 rounded-xl shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
      
        {instances.map((a, index) => <ChatBubble owner={a.owner} key={index} msg={a.msg} />
        )}
      </div>
      <div className="flex m-4">
        <input
          className="outline-none min-h-[60px] mr-4 bg-gray-50 border border-gray-300 text-gray-700 text-m rounded-full focus:bg-gray-800 block w-full pl-7 p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Bir istem giriniz..."
          type="text"
          value={request}
          onChange={(event) => {setRequest(event.target.value);}}
        />
        <button
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-2xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() => {handlePreSubmit(); handleSubmit();}}
        >
          <LuSend />
        </button>
      </div>
    </div>
  );
}


function ChatBubble(props) {
  let owner = props.owner
  let msg = props.msg


  console.log(owner)


  if (owner == "me") {
    return (
    <div className="flex flex-row p-4 justify-end" >
    <div className="flex flex-col min-w-[300px] max-w-[520px] leading-1.5 p-4 border-blue-500 bg-blue-500 rounded-tl-lg rounded-br-lg rounded-bl-lg dark:bg-blue-700">
      <div className="flex justify-end items-center space-x-2 rtl:space-x-reverse">
        <span className="text-sm font-semibold text-gray-900 dark:text-white">
          Veysel OZTURK
        </span>
        {/* <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span> */}
      </div>
      <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{msg}</p>
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Delivered
      </span>
    </div>
    <img className="w-10 h-10 rounded-full ml-2" src={user_logo} alt="user_pic"></img>
  </div> )
  }


  return (
    <div className="flex flex-row p-4" >
    <img className="w-10 h-10 rounded-full mr-2" src={logo} alt="logo"></img>
    <div className="flex flex-col w-full max-w-[520px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <span className="text-sm font-semibold text-gray-900 dark:text-white">
          Sphinx
        </span>
        {/* <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span> */}
      </div>
      <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{msg}</p>
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Delivered
      </span>
    </div>
  </div>
  )

}

export default Chatscreen;
