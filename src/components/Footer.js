import "../styles/footer.scss";
const Footer=()=>{
    return(
        <footer className="footer">
            <div className="container">
                <div>
                    
                    <a href="#terms_of_service.html">Terms of Service</a> | 
                    <a href="#privacy.html">Privacy Statement</a> |
                    <a href="#faqs.html">FAQs</a> |
                    <a href="#glossary.html">Glossary</a> |
                    <a href="#contact.html">Contact Us</a>
                    
                    <p className="copyright">
                        Copyright &#169; 2022 PS.G<br />
                        
                        FOR ENTERTAINMENT/MARKETING PURPOSES ONLY
                        
                        <div id="debugOutput"></div>
                    </p>
                </div>
		    </div>
		
    </footer>
    )
}
export default Footer;