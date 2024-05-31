// import './counter.css';

class Counter {

  render()
  {
    const hr_top = document.createElement('hr');
    const hr_down = document.createElement('hr');
    const div = document.createElement("div");
    div.classList.add('counter-wrapper');

    div.appendChild(hr_top);

    const counter = document.createElement("span");
    counter.innerText = "0";
    counter.classList.add('counter');
    div.appendChild(counter);

    div.appendChild(hr_down);

    const increment = document.createElement('button');
    increment.innerText = 'افزایش';
    increment.classList.add('btn');
    increment.classList.add('btn-success');

    div.appendChild(increment);

    const decrement = document.createElement('button');
    decrement.innerText = 'کاهش';
    decrement.classList.add('btn');
    decrement.classList.add('btn-danger');

    div.appendChild(decrement);





    document.body.appendChild(div);
  }

}

export default Counter;
