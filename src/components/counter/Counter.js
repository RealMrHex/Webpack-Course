import './counter.css';
import './counter.scss';

class Counter {

  render()
  {
    const div = document.createElement("div");
    div.classList.add('counter-wrapper');

    const counter = document.createElement("span");
    counter.innerText = "0";
    counter.classList.add('counter');
    div.appendChild(counter);

    const buttons_wrapper = document.createElement('div');
    buttons_wrapper.classList.add('buttons-wrapper');
    div.appendChild(buttons_wrapper);

    const increment = document.createElement('button');
    increment.innerText = 'افزایش';
    increment.classList.add('btn');
    increment.classList.add('btn-success');

    buttons_wrapper.appendChild(increment);

    const decrement = document.createElement('button');
    decrement.innerText = 'کاهش';
    decrement.classList.add('btn');
    decrement.classList.add('btn-danger');

    buttons_wrapper.appendChild(decrement);

    document.body.appendChild(div);
  }

}

export default Counter;
