import React from "react";

function Contact() {
  //   function send() {
  //     var name = document.getElementById("name").value;
  //     var email = document.getElementById("email").value;
  //     var phone = document.getElementById("phone").value;
  //     var writearea = document.getElementById("writearea");
  //     var submit = document.getElementById("submit").value;
  //
  // var body =
  //   "Name: " +
  //   name +
  //   "<br/> Email: " +
  //   email +
  //   "<br> Contact Number: " +
  //   phone +
  //   "<br> Massage: " +
  //   writearea.value;
  // const value3 = writearea.value;
  //  console.log(body);

  //   Email.send({
  //     SecureToken: "89c62f7b-9a16-4f6d-a198-13879f9947b6",

  //     To: "jyotipatra.subham@gmail.com",
  //     From: "patrajyotishankarlearn@gmail.com",
  //     Subject: writearea,
  //     Body: body,
  //   })
  //     .then((message) => {
  //       // console.log(message);
  //       if (message.includes("OK")) {
  //         swal("Successful!", "Your Data Successfully Received!", "success");
  //       } else {
  //         swal("Something Wrong!", "Your Data Not Received!", "error");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error occurred while sending email:", error);
  //       swal("Something Wrong!", "Your Data Not Received!", "error");
  //     });
  // }

  return (
    <>
      <div className="w-[calc(100%)] h-[calc(100vh-70px)] overflow-y-scroll">
        <div>
          <div className="flex flex-col justify-start items-center">
            <h1 className="text-[70px] text-blue-800 font-bold font-serif">
              Let's get in touch.
            </h1>
            <p className="text-[20px] text-gray-500  font-mono">
              Question? Feedback? Proposal?
            </p>
          </div>
          <form
            action=""
            className=" mb-5 flex flex-col justify-start items-center mt-7 gap-5"
          >
            <input
              className="w-[50%] bg-transparent border-blue-800 border-[1px] px-[20px] py-[5px] rounded-xl outline-none focus:shadow-sm focus:shadow-blue-800 text-gray-200"
              type="text"
              placeholder="Name"
              required
              autocomplete="off"
              id="name"
            />
            <input
              className="w-[50%] bg-transparent border-blue-800 border-[1px] px-[20px] py-[5px] rounded-xl outline-none focus:shadow-sm focus:shadow-blue-800 text-gray-200"
              type="email"
              placeholder="Email"
              required
              autocomplete="off"
              id="email"
            />
            <input
              className="w-[50%] bg-transparent border-blue-800 border-[1px] px-[20px] py-[5px] rounded-xl outline-none focus:shadow-sm focus:shadow-blue-800 text-gray-200"
              type="number"
              placeholder="Phone"
              required
              autocomplete="off"
              id="phone"
            />
            <textarea
              className="w-[50%] bg-transparent border-blue-800 border-[1px] px-[20px] py-[5px] rounded-xl outline-none focus:shadow-sm focus:shadow-blue-800 text-gray-200"
              name="writearea"
              cols="30"
              rows="10"
              placeholder="Message"
              required
              autocomplete="off"
              id="writearea"
            ></textarea>
            <input
              className="w-[50%] bg-transparent bg-blue-800 hover:bg-blue-900 cursor-pointer border-blue-800 border-[1px] px-[20px] py-[5px] rounded-xl outline-none focus:shadow-sm focus:shadow-blue-800 text-gray-200"
              type="button"
              id="submit"
              value="Send Message"
              onclick="send()"
            />
          </form>
        </div>
        <div className=" flex  justify-center mt-10  m-[20px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2667.9931557638965!2d86.83762334834381!3d21.440732424837346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1c61e716274ee3%3A0x6925025cf86416d7!2sPatra%20variety%20store!5e0!3m2!1sen!2sin!4v1707245256721!5m2!1sen!2sin"
            className="rounded-lg border-none w-[90%] h-[500px]"
            allowFullScreen="true"
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
    </>
  );
}

export default Contact;
