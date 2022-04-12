import ExpoSnack from "react-expo-snack"
import React from "react"

interface ExpoSnackProps {
  snackId: string
  platform?: string
}

const Snack: React.FC<ExpoSnackProps> = ({ snackId, platform = "web" }) => {

  return (
    <div>
      <ExpoSnack
        id={snackId}
        preview={true}
        platform={platform}
        theme="light"
      />
      <a
        className="button button--primary button--md"
        href={`https://snack.expo.dev/${snackId}`}
        style={{
          fontWeight: 500,
          padding: "5px 10px",
          marginLeft: 5,
        }}
        target="_blank"
      >
        Embed not loading? Click here
      </a>
    </div>
  )
}

export default Snack
