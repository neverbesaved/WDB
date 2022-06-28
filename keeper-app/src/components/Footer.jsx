const Footer = () => { 
    let year = new Date().getFullYear()
    return (
        <footer className="text-[#ccc] absolute text-center w-full h-10 bottom-0">
        <p>Copyright {year}</p>
        </footer>
    )
}
export default Footer