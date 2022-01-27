import { Oval } from "svg-loaders-react";

const Card = ({ image, display, description, dataLoaded = false }) => {
  return (
    <div className=" w-full">
      <div className="py-6 rounded-md bg-white shadow-sm grid grid-row-3 gap-2">
        <div>
          <div className="h-12 flex justify-center">{image}</div>

          <h2 className="title-font font-medium text-3xl text-gray-900 flex justify-center my-3">
            {!dataLoaded ? (
              <Oval stroke="#efefef" clssName="text-center" />
            ) : (
              { display }
            )}
          </h2>
          <p className="leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
