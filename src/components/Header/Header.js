function Header ({title}) {
    console.log(title);
    const content = title
    return (
        <>
        <h1> {content} </h1>
        </>
    )
}

export default Header;