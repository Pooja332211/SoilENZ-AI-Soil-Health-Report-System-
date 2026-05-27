"use client";

interface Props {
  data: any;
}
import React from "react";

import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <FiMenu className="h-6 w-6" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function RecommendationView({
  data,
}: Props) {

  if (!data) return null;

  const interpretation =
    data.interpretation;

  const soilTestId =
    data.soil_test_id;


  const downloadReport = () => {

    window.open(
      `http://127.0.0.1:8000/reports/${soilTestId}`,
      "_blank"
    );
  };


  return (
    <div className="
      bg-white
      rounded-3xl
      shadow-xl
      border
      border-gray-200
      p-8
      mt-10
    ">

      {/* HEADER */}

      <div className="
        flex
        flex-col
        md:flex-row
        md:items-center
        md:justify-between
        gap-4
        mb-8
      ">

        <div>

          <h2 className="
            text-3xl
            font-bold
            text-green-700
          ">
            Soil Intelligence Report
          </h2>

          <p className="
            text-gray-500
            mt-1
          ">
            AI-powered soil advisory
          </p>

        </div>


        {/* PDF BUTTON */}

        <button
          onClick={downloadReport}
          className="
            bg-red-600
            hover:bg-red-700
            text-white
            px-5
            py-3
            rounded-xl
            font-semibold
            shadow-md
            transition-all
            hover:scale-[1.02]
          "
        >
          Download PDF
        </button>

      </div>


      {/* SOIL HEALTH */}

      <div className="
        bg-green-50
        border
        border-green-200
        rounded-2xl
        p-6
        mb-8
      ">

        <h3 className="
          text-xl
          font-bold
          text-green-800
        ">
          Soil Health Score
        </h3>

        <p className="
          text-5xl
          font-bold
          mt-3
          text-green-700
        ">
          {
            interpretation.soil_health
              .score
          }
        </p>

        <p className="
          mt-2
          text-lg
          text-green-800
        ">
          {
            interpretation.soil_health
              .category
          }
        </p>

      </div>


      {/* NUTRIENT STATUS */}

      <div>

        <h3 className="
          text-2xl
          font-bold
          text-green-700
          mb-6
        ">
          Soil Nutrient Analysis
        </h3>

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-5
        ">

          {Object.entries(
            interpretation
          ).map(
            ([key, value]: any) => {

              if (
                key === "soil_health"
              )
                return null;

              return (

                <div
                  key={key}
                  className="
                    border
                    border-gray-200
                    rounded-2xl
                    p-5
                    shadow-sm
                    hover:shadow-md
                    transition-all
                  "
                >

                  <h4 className="
                    text-lg
                    font-semibold
                    capitalize
                    mb-3
                  ">
                    {key.replace(
                      "_",
                      " "
                    )}
                  </h4>

                  <p className="
                    text-gray-600
                  ">
                    Value:

                    <span className="
                      font-bold
                      ml-2
                      text-black
                    ">
                      {value.value}
                    </span>

                  </p>

                  <p className="mt-2">

                    Status:

                    <span className={`
                      ml-2
                      font-bold

                      ${
                        value.status ===
                          "LOW" ||

                        value.status ===
                          "DEFICIENT"

                          ? "text-red-600"

                          : value.status ===
                            "MEDIUM"

                          ? "text-yellow-600"

                          : "text-green-600"
                      }

                    `}>

                      {value.status}

                    </span>

                  </p>

                  {value.recommendation && (

                    <div className="
                      mt-4
                      bg-gray-50
                      rounded-xl
                      p-3
                    ">

                      <p className="
                        text-sm
                        text-gray-700
                      ">
                        {
                          value.recommendation
                        }
                      </p>

                    </div>

                  )}

                </div>
              );
            }
          )}

        </div>

      </div>


      {/* CROP RECOMMENDATIONS */}

      <div className="mt-10">

        <h3 className="
          text-2xl
          font-bold
          text-green-700
          mb-6
        ">
          Recommended Crops
        </h3>

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-5
        ">

          {data.crop_recommendations?.map(
            (
              crop: any,
              index: number
            ) => (

            <div
              key={index}
              className="
                border
                border-green-200
                bg-green-50
                rounded-2xl
                p-5
              "
            >

              <h4 className="
                text-xl
                font-bold
                text-green-800
              ">
                {crop.crop}
              </h4>

              <p className="
                mt-2
                font-semibold
                text-yellow-700
              ">
                Suitability:
                {" "}
                {crop.suitability}
              </p>

              <p className="
                mt-3
                text-gray-700
              ">
                {crop.reason}
              </p>

            </div>

          ))}

        </div>

      </div>


      {/* FERTILIZER PLAN */}

      <div className="mt-10">

        <h3 className="
          text-2xl
          font-bold
          text-green-700
          mb-6
        ">
          Fertilizer Recommendations
        </h3>

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-5
        ">

          {data.fertilizer_plan?.map(
            (
              item: any,
              index: number
            ) => (

            <div
              key={index}
              className="
                border
                border-yellow-200
                bg-yellow-50
                rounded-2xl
                p-5
              "
            >

              <h4 className="
                text-xl
                font-bold
                text-yellow-800
              ">
                {item.nutrient}
              </h4>

              <p className="
                mt-3
                text-gray-700
              ">
                Fertilizer:
                {" "}

                <span className="
                  font-semibold
                ">
                  {item.fertilizer}
                </span>

              </p>

              <p className="
                mt-2
                text-gray-700
              ">
                Dosage:
                {" "}
                {item.dosage}
              </p>

              <p className="
                mt-2
                text-gray-700
              ">
                Timing:
                {" "}
                {item.timing}
              </p>

              <p className="
                mt-2
                text-gray-700
              ">
                Method:
                {" "}
                {item.method}
              </p>


              {/* ORGANIC */}

              <div className="
                mt-4
                bg-white
                rounded-xl
                p-3
              ">

                <p className="
                  text-green-700
                  text-sm
                  font-semibold
                ">
                  Organic Alternative
                </p>

                <p className="
                  mt-1
                  text-gray-700
                ">
                  {
                    item.organic_option
                  }
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}