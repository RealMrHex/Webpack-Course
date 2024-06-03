import './alert.scss';

class Alert
{
    warning(content)
    {
        this.render(content, 'warning');
    }

    info(content)
    {
        this.render(content, 'info');
    }

    success(content)
    {
        this.render(content, 'success');
    }

    danger(content)
    {
        this.render(content, 'danger');
    }

    render(content, type)
    {
        const body = document.body;

        const wrapper = document.createElement('div');
        wrapper.classList.add('alert-wrapper');

        const alert = document.createElement('div');
        alert.classList.add('alert');
        alert.classList.add(type);
        alert.innerText = content;
        
        wrapper.appendChild(alert);

        body.appendChild(wrapper);
    }
}

export default Alert;