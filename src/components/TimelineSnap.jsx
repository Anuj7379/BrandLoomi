import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const TimelineSnap = ({ year, text }) => {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '40px' }}>
      {/* Icon + Line + Year */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <LocationOnOutlinedIcon style={{ fontSize: 40, color: 'white' }} />

        {/* Small vertical line below the icon */}
        <div className="flex flex-col">
          <div className="bg-white h-px w-4 ml-12 mb-2" />

        <div className="ml-12 text-xl font-bold italic  text-white" >{year}</div>
        </div>
      </div>

      {/* Text with left border and underline */}
      <div>
        <div style={{ borderLeft: '2px solid #00BFFF', paddingLeft: 16, color: 'white' }}>
          {text}
        </div>
        <div style={{ width: 158, height: 1, backgroundColor:"white" , marginTop: 8 , marginLeft :150  }} />
      </div>
    </div>
  );
};

export default TimelineSnap;
