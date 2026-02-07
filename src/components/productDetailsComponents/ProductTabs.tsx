import React, { useState } from "react";
import { icons } from "../../helpers/IconsProver";

const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className="pb-20!">
      <div className="">
        <div className="flex justify-center items-center w-full border border-gray-100 rounded-t-md">
          <ul className="w-max flex gap-x-20  relative label2 ">
            {/* Home Tab */}
            <li
              onClick={() => setActiveTab("home")}
              className={`tab relative  text-center py-4! px-6! border-b-3 cursor-pointer transition-all 
            ${
              activeTab === "home"
                ? "text-primary-500 font-semibold bg-gray-50 border-primary-500"
                : "font-medium border-gray-200 text-gray-900 hover:text-primary-500"
            }`}
            >
              Description
            </li>

            {/* Content Tab */}
            <li
              onClick={() => setActiveTab("content")}
              className={`tab relative  text-center py-4! px-6! border-b-3 cursor-pointer transition-all 
            ${
              activeTab === "content"
                ? "text-primary-500 font-semibold bg-gray-50 border-primary-500"
                : "font-medium border-gray-200 text-gray-900 hover:text-primary-500"
            }`}
            >
              Additional information
            </li>

            {/* Profile Tab */}
            <li
              onClick={() => setActiveTab("profile")}
              className={`tab relative  text-center py-4! px-6! border-b-3 cursor-pointer transition-all 
            ${
              activeTab === "profile"
                ? "text-primary-500 font-semibold bg-gray-50 border-primary-500"
                : "font-medium border-gray-200 text-gray-900 hover:text-primary-500"
            }`}
            >
              Specification
            </li>
            <li
              onClick={() => setActiveTab("review")}
              className={`tab relative  text-center py-4! px-6! border-b-3 cursor-pointer transition-all 
            ${
              activeTab === "review"
                ? "text-primary-500 font-semibold bg-gray-50 border-primary-500"
                : "font-medium border-gray-200 text-gray-900 hover:text-primary-500"
            }`}
            >
              Review
            </li>
          </ul>
        </div>

        {/* Tab Contents */}
        {activeTab === "home" && (
          <div className="flex gap-x-4 justify-between border border-t-0 border-gray-100">
            <div className="tab-content max-w-3xl block mt-8! pl-10!">
              <h4 className="text-gray-900 body-medium-600 mb-6!">
                Description
              </h4>
              <p className="text-gray-600 mt-2 leading-relaxed body-medium-400 text-justify">
                The most powerful MacBook Pro ever is here. With the
                blazing-fast M1 Pro or M1 Max chip — the first Apple silicon
                designed for pros — you get groundbreaking performance and
                amazing battery life. Add to that a stunning Liquid Retina XDR
                display, the best camera and audio ever in a Mac notebook, and
                all the ports you need. The first notebook of its kind, this
                MacBook Pro is a beast. M1 Pro takes the exceptional performance
                of the M1 architecture to a whole new level for pro users.
                <span className="block py-7!">
                  Even the most ambitious projects are easily handled with up to
                  10 CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and
                  dedicated encode and decode media engines that support H.264,
                  HEVC, and ProRes codecs.
                </span>
              </p>
            </div>
            {/* features */}
            <div className="border-r border-gray-100 pr-20!">
              <div className="tab-content max-w-2xl block mt-8!">
                <h4 className="text-gray-900 body-medium-600 mb-6!">
                  Features
                </h4>
                <ul className="flex flex-col gap-y-3">
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                </ul>
              </div>
            </div>
            {/* shipping */}
            <div className=" pr-20!">
              <div className="tab-content max-w-3xl block mt-8!">
                <h4 className="text-gray-900 body-medium-600 mb-6!">
                  Shipping Information
                </h4>
                <ul className="flex flex-col gap-y-3">
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "content" && (
          <div className="flex gap-x-4 justify-between border border-t-0 rounded-b-md border-gray-100 bg-green-200">
            <div className="tab-content max-w-3xl block mt-8! pl-10!">
              <h4 className="text-gray-900 body-medium-600 mb-6!">
                Description
              </h4>
              <p className="text-gray-600 mt-2 leading-relaxed body-medium-400 text-justify">
                The most powerful MacBook Pro ever is here. With the
                blazing-fast M1 Pro or M1 Max chip — the first Apple silicon
                designed for pros — you get groundbreaking performance and
                amazing battery life. Add to that a stunning Liquid Retina XDR
                display, the best camera and audio ever in a Mac notebook, and
                all the ports you need. The first notebook of its kind, this
                MacBook Pro is a beast. M1 Pro takes the exceptional performance
                of the M1 architecture to a whole new level for pro users.
                <span className="block py-7!">
                  Even the most ambitious projects are easily handled with up to
                  10 CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and
                  dedicated encode and decode media engines that support H.264,
                  HEVC, and ProRes codecs.
                </span>
              </p>
            </div>
            {/* features */}
            <div className="border-r border-gray-100 pr-20!">
              <div className="tab-content max-w-2xl block mt-8!">
                <h4 className="text-gray-900 body-medium-600 mb-6!">
                  Features
                </h4>
                <ul className="flex flex-col gap-y-3">
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                </ul>
              </div>
            </div>
            {/* shipping */}
            <div className=" pr-20!">
              <div className="tab-content max-w-3xl block mt-8!">
                <h4 className="text-gray-900 body-medium-600 mb-6!">
                  Shipping Information
                </h4>
                <ul className="flex flex-col gap-y-3">
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="flex gap-x-4 justify-between border border-t-0 border-gray-100 bg-blue-200">
            <div className="tab-content max-w-3xl block mt-8! pl-10!">
              <h4 className="text-gray-900 body-medium-600 mb-6!">
                Description
              </h4>
              <p className="text-gray-600 mt-2 leading-relaxed body-medium-400 text-justify">
                The most powerful MacBook Pro ever is here. With the
                blazing-fast M1 Pro or M1 Max chip — the first Apple silicon
                designed for pros — you get groundbreaking performance and
                amazing battery life. Add to that a stunning Liquid Retina XDR
                display, the best camera and audio ever in a Mac notebook, and
                all the ports you need. The first notebook of its kind, this
                MacBook Pro is a beast. M1 Pro takes the exceptional performance
                of the M1 architecture to a whole new level for pro users.
                <span className="block py-7!">
                  Even the most ambitious projects are easily handled with up to
                  10 CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and
                  dedicated encode and decode media engines that support H.264,
                  HEVC, and ProRes codecs.
                </span>
              </p>
            </div>
            {/* features */}
            <div className="border-r border-gray-100 pr-20!">
              <div className="tab-content max-w-2xl block mt-8!">
                <h4 className="text-gray-900 body-medium-600 mb-6!">
                  Features
                </h4>
                <ul className="flex flex-col gap-y-3">
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                </ul>
              </div>
            </div>
            {/* shipping */}
            <div className=" pr-20!">
              <div className="tab-content max-w-3xl block mt-8!">
                <h4 className="text-gray-900 body-medium-600 mb-6!">
                  Shipping Information
                </h4>
                <ul className="flex flex-col gap-y-3">
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "review" && (
          <div className="flex gap-x-4 justify-between border border-t-0 border-gray-100 bg-amber-200">
            <div className="tab-content max-w-3xl block mt-8! pl-10!">
              <h4 className="text-gray-900 body-medium-600 mb-6!">
                Description
              </h4>
              <p className="text-gray-600 mt-2 leading-relaxed body-medium-400 text-justify">
                The most powerful MacBook Pro ever is here. With the
                blazing-fast M1 Pro or M1 Max chip — the first Apple silicon
                designed for pros — you get groundbreaking performance and
                amazing battery life. Add to that a stunning Liquid Retina XDR
                display, the best camera and audio ever in a Mac notebook, and
                all the ports you need. The first notebook of its kind, this
                MacBook Pro is a beast. M1 Pro takes the exceptional performance
                of the M1 architecture to a whole new level for pro users.
                <span className="block py-7!">
                  Even the most ambitious projects are easily handled with up to
                  10 CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and
                  dedicated encode and decode media engines that support H.264,
                  HEVC, and ProRes codecs.
                </span>
              </p>
            </div>
            {/* features */}
            <div className="border-r border-gray-100 pr-20!">
              <div className="tab-content max-w-2xl block mt-8!">
                <h4 className="text-gray-900 body-medium-600 mb-6!">
                  Features
                </h4>
                <ul className="flex flex-col gap-y-3">
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                </ul>
              </div>
            </div>
            {/* shipping */}
            <div className="pr-20! ">
              <div className="tab-content max-w-3xl block mt-8!">
                <h4 className="text-gray-900 body-medium-600 mb-6!">
                  Shipping Information
                </h4>
                <ul className="flex flex-col gap-y-3">
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                  <li className="flex items-center gap-x-3">
                    {icons.reddit} Free 1 Year Warranty{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
