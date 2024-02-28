import React from "react";

const Portfolio = () => {
  const plist = [
    {
      id: 1,
      img: "https://www.techfunnel.com/wp-content/uploads/2021/10/web-application.png",
      title: "The government website",
      des: "gov.uk (styled on the site as GOV.UK) is a United Kingdom public sector information website, created by the Government Digital Service to provide a single point of access to HM Government services.",
      category: "web-app",
    },
    {
      id: 1,
      img: "https://www.techfunnel.com/wp-content/uploads/2021/10/web-application.png",
      title: "The government website",
      des: "gov.uk (styled on the site as GOV.UK) is a United Kingdom public sector information website, created by the Government Digital Service to provide a single point of access to HM Government services.",
      category: "web-app",
    },
    {
      id: 1,
      img: "https://www.techfunnel.com/wp-content/uploads/2021/10/web-application.png",
      title: "The government website",
      des: "gov.uk (styled on the site as GOV.UK) is a United Kingdom public sector information website, created by the Government Digital Service to provide a single point of access to HM Government services.",
      category: "web-app",
    },
    {
      id: 1,
      img: "https://www.techfunnel.com/wp-content/uploads/2021/10/web-application.png",
      title: "The government website",
      des: "gov.uk (styled on the site as GOV.UK) is a United Kingdom public sector information website, created by the Government Digital Service to provide a single point of access to HM Government services.",
      category: "web-app",
    },
    {
      id: 1,
      img: "https://www.techfunnel.com/wp-content/uploads/2021/10/web-application.png",
      title: "The government website",
      des: "gov.uk (styled on the site as GOV.UK) is a United Kingdom public sector information website, created by the Government Digital Service to provide a single point of access to HM Government services.",
      category: "web-app",
    },
    {
      id: 1,
      img: "https://www.techfunnel.com/wp-content/uploads/2021/10/web-application.png",
      title: "The government website",
      des: "gov.uk (styled on the site as GOV.UK) is a United Kingdom public sector information website, created by the Government Digital Service to provide a single point of access to HM Government services.",
      category: "web-app",
    },
    {
      id: 1,
      img: "https://www.techfunnel.com/wp-content/uploads/2021/10/web-application.png",
      title: "The government website",
      des: "gov.uk (styled on the site as GOV.UK) is a United Kingdom public sector information website, created by the Government Digital Service to provide a single point of access to HM Government services.",
      category: "web-app",
    },
    {
      id: 1,
      img: "https://www.techfunnel.com/wp-content/uploads/2021/10/web-application.png",
      title: "The government website",
      des: "gov.uk (styled on the site as GOV.UK) is a United Kingdom public sector information website, created by the Government Digital Service to provide a single point of access to HM Government services.",
      category: "web-app",
    },
  ];
  return (
    <div className="w-[85%] h-screen py-5 mx-auto">
      <div>
        <div>
          <h1 className="text-gray-400 text-center uppercase">
            What I will do for you
          </h1>
        </div>
        <div className="mt-5">
          <h1 className="text-center font-bold text-4xl text-cyan-650 uppercase">
            Latest Project
          </h1>
        </div>
        <div className="">
          <ul className="flex items-center justify-center mt-8 uppercase gap-5">
            <li>All</li>
            <li>Product</li>
            <li>Interacting</li>
            <li>Web - App</li>
          </ul>
        </div>
        <div className="mt-5">
          <div className="">
            <div className="grid grid-cols-4 gap-5">
              {plist.map((list) => (
                <div className="relative border-2 border-cyan-650 text-center p-1">
                  <div>
                    <img src={list.img} alt="image" />
                  </div>
                  <div>
                    <h1 className="font-bold">{list.title}</h1>
                  </div>
                  <div className="absolute top-1 left-1 bg-cyan-650 opacity-90   border-2 rounded-b-md rounded-t-md ">
                    <span className="p-1 text-black text-sm">
                      {list.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
