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


        const button = document.createElement('button');
        button.classList.add('btn-alert');
        button.innerText = 'نمایش پیغام';
        button.addEventListener(
        'click',
         () => 
         {
            import('UIKit/Alert')
            .then(
                (module) =>
                {
                    const Alert = module.default;
                    const _alert = new Alert();
                    _alert.success('لود ماژول به صورت lazy با موفقیت انجام شد.');
                }
            );
         }
        );

        body.appendChild(title);
        body.appendChild(caption);
        body.appendChild(button);
    }
}

export default Home;