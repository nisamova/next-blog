export default function DarkTheme() {
  return (
    <style jsx global>
      {`
        :root {
          --background-color: aquamarine;
          --link-color: rgb(232, 97, 119);
          --text-color: white;
        }
      `}
    </style>
  )
}
