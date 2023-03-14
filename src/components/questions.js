const questions = [
  {
    title: 'От какого класса идет наследование всех компонентов?',
    variants: ['ComponentReact', 'ReactComponent', 'ReactJS.Component', 'Component', 'React.Component'],
    correct: 4,
  },
  {
    title: 'Какая компания разработала React JS??',
    variants: ['Twitter', 'GitHub', 'Google', 'Amazon', 'Facebook'],
    correct: 4,
  },
	{
    title: 'Сколько родительских HTML тегов может быть выведено в React JS компоненте?',
    variants: ['Не более 3', 'Не более 5', 'Не более 10', 'Неограниченное количество', 'Всегда 1'],
    correct: 4,
  },
	{
    title: 'Как много компонентов может быть на сайте?',
    variants: ['Не более 10', 'Неограниченное количество', 'Не более 100', 'Не более 150', 'Не более 300'],
    correct: 1,
  },
	{
    title: 'Куда можно встроить готовый код из метода render()?',
    variants: ['Только в div', 'Только в тег, у которого есть id', 'В div или же в span', 'В любой тег'],
    correct: 3,
  },
	{
    title: 'Чем свойства отличаются от состояний?',
    variants: ['Свойства можно изменять, состояния нельзя', 'Свойства для работы со значениями, состояния для работы с функциями', 'Состояния можно изменять, свойства нельзя', 'Состояния для работы со значениями, свойства для работы с функциями'],
    correct: 2,
  },
	{
    title: 'Где правильно выведен компонент через рендер?',
    variants: ['<Test>', '<Test >', '</Test>', '<Test />', '</ Test>'],
    correct: 3,
  },
	{
    title: 'Какой метод отвечает за вывод информации через React JS компонент?',
    variants: ['ReactDOM', 'render', 'react', 'print', 'console'],
    correct: 1,
  },
	{
    title: 'Где правильно передена функция в качестве свойства?',
    variants: ['argument={this.someFunction ()}', 'argument=(this.someFunction)', 'argument={this.someFunction}', 'argument={this.someFunction {}}', 'argument={someFunction}'],
    correct: 2,
  },
	{
    title: 'React JS – это...',
    variants: ['MVC-фреймворк', 'JavaScript библиотека', 'фреймворк', 'Back-end платформа'],
    correct: 1,
  },
	{
    title: 'Где правильно создан компонент?',
    variants: ['React.Component {}', 'class App extends Component {}', 'class App {}', 'class App extends React.Component {}', 'class App extends React.Component ({})'],
    correct: 4,
  },
];

export default questions