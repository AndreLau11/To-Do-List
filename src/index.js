import _ from 'lodash';
import './style.css';
import Icon from '../imagine/points.jpg';

const base = document.getElementById('task-list');

const tasks = JSON.parse(localStorage.getItem('tasks')) || [{ description: 'example1', completed: false, index: '0' }, { description: 'example2', completed: false, index: '1' }];

function loadTasks() {
  for (let i = 0; i < tasks.length; i += 1) {
    base.innerHTML += `<li><input type="checkbox" class="checkbox" id="task${i}"><label for="task${i}">${tasks[i].description}</label><img src=${Icon} alt=""></li>`;
  }
}

base.innerHTML = _.join('.');

localStorage.setItem('tasks', JSON.stringify(tasks));
document.addEventListener('DOMContentLoaded', loadTasks, false);