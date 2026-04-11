import './About.css';

function About() {
    return(
        <div className='about-container'>
            <div className="about-image">
                <img src="https://www.impactbnd.com/hubfs/blog-image-uploads/best-about-us-pages.jpg"/>
            </div>
            <div className="about">
                <h1>Our Mission</h1>
            </div>
            <div className='card-container'>
                <div className='card-div'>
                    <h2>Our Story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.</p>
                </div>
                <div className='card-div'>
                    <h2>Our Team</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.</p>
                </div>
                <div className='card-div'>
                    <h2>Our Values</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.</p>
                </div>
            </div>

        </div>

    )
}

export default About;