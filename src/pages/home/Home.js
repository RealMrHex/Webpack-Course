import './home.scss';

class Home
{
    render()
    {
        console.log('home-page rendered.');

        const body = document.body;

        body.classList.add('home-page');
        
        const title = document.createElement('h1');
        title.innerText = 'صفحه اصلی دوره وب پک';
        title.classList.add('title');

        const caption = document.createElement('p');
        caption.innerText = 'توضیحات درمورد دوره جذاب وب پک از وبسایت سبزلرن';
        caption.classList.add('caption');


        body.appendChild(title);
        body.appendChild(caption);
    }
}

export default Home;