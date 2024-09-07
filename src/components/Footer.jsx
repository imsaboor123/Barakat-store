import React from 'react';
import { FaFacebookSquare, FaYoutube, FaTwitterSquare, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
import { ImNotification } from "react-icons/im";

const socialIcons = [
  { icon: FaFacebookSquare, link: "#" },
  { icon: FaYoutube, link: "#" },
  { icon: FaTwitterSquare, link: "#" },
  { icon: FaInstagram, link: "#" },
  { icon: FaWhatsapp, link: "#" },
];

const footerSections = [
  {
    title: "Company",
    links: ["About Us", "Contact Us", "Privacy Policy", "Delivery Policy", "Barakat Rewards"],
  },
  {
    title: "Support",
    links: ["Payment Methods", "Refund/Return & Cancellation", "Term & Conditions", "Disclaimer", "Barakat Rewards Faq"],
  },
  {
    title: "Programs",
    links: ["Mango Carnival", "Vegetables", "Fresh Juices", "Ice Cream", "Meats"],
  },
  {
    title: "Categories",
    links: ["Fruits", "Grab N Go", "Gifting & Party Needs", "Organics", "Bakery", "Dairy & Eggs", "Pantry"],
  },
];

const supportItems = [
  { icon: ImNotification, label: "Help Center", info: "infobarakatfresh.ae" },
  { icon: FaPhone, label: "Phone Support", info: "800 - 2272 - 528" },
];

const Footer = () => {
  return (
    <>
      {/* Footer at the top */}
      <footer className="sticky top-0  bg-[#f9f9f9]">
        <div className="flex max-w-screen-2xl text-md mx-auto md:px-24 px-4 justify-between items-center text-zinc-700 py-4">
          <div className="w-full md:w-1/2 flex items-center space-x-4">
            <h2 className="text-[20px] font-bold">Connect With Us</h2>
            <ul className="flex items-center space-x-4">
              {socialIcons.map((item, index) => (
                <li key={index}><a href={item.link}><item.icon className="text-[30px]" /></a></li>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex w-full md:w-1/2 justify-center md:justify-end">
            <ul className="flex items-center space-x-4">
              {["and_app.9c7d588b.png", "huawei_app.f9cfeed9.png", "ios_app.e387f51d.png"].map((src, index) => (
                <li key={index}><a href="#"><img className="h-14 w-auto" src={`images/footer-images/${src}`} alt="App" /></a></li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      {/* Main footer content */}
      <footer className="bg-[#f9f9f9] z-50 max-w-screen-2xl text-md mx-auto md:px-24 px-4 text-base-content p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h6 className="footer-title">{section.title}</h6>
              {section.links.map((link, linkIndex) => (
                <a key={linkIndex} href="#" className="link link-hover text-zinc-700 block">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="hidden md:flex space-x-4 mt-8">
          {supportItems.map((item, index) => (
            <div key={index} className="items-center h-[60px] w-[260px] flex justify-center border-2 bg-white border-[#c0f1cb] shadow-sm">
              <item.icon className='text-[#2cd567] text-xl mr-2' />
              <div className="space-y-1">
                <span className='block uppercase text-semibold text-[12px] text-zinc-300 font-bold'>{item.label}</span>
                <span className='block text-[20px] font-bold'>{item.info}</span>
              </div>
            </div>
          ))}
        </div>
      </footer>

      {/* Footer bottom section */}
      <footer className="bg-[#f9f9f9] z-50 max-w-screen-2xl text-md mx-auto md:px-24 px-4 flex items-center text-base-content p-4">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start space-x-4 mb-4 md:mb-0">
          {["mc.4233ab9e.png", "visa_card.e4379baf.png", "am_ex.7356ab42.png", "cash.5a5542c2.png"].map((src, index) => (
            <img key={index} className='w-20 md:w-24' src={`images/footer-images/${src}`} alt="Payment Method" />
          ))}
        </div>
        <aside className='w-full md:w-1/2 px-14 text-center md:text-right'>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
