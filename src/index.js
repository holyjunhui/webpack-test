import axios from 'axios';
import React,{Component} from 'react'
import ReactDOM from 'react-dom'



class Game extends Component {
	componentDidMount(){
		axios({
			method:'get',
			url:'/interview/chalkers.json',
			data:{
			session:"eyJmcm9tIjoiQyIsInNyY19pZCI6MSwibWFuYWdlcl9pZCI6MSwidXNlcl9pZCI6MTAwMDAwMDE4NywiZXhwaXJlIjoxNTQ1ODMyOTU3LCJzaWduYXR1cmUiOiJlMTEyNDk2MWE0YzRkNjA1Yzg0N2QwMzFiNWUwOTYyZjcxZDBhNDYxIn0="
			}
		}).then((result)=>{
			console.log("111111",result)
		}),


		axios({
			method:'post',
			url:'/api/interview/resume/getItemNum',
			data:{
			session:"eyJmcm9tIjoiQyIsInNyY19pZCI6MSwibWFuYWdlcl9pZCI6MSwidXNlcl9pZCI6MTAwMDAwMDE4NywiZXhwaXJlIjoxNTQ1ODMyOTU3LCJzaWduYXR1cmUiOiJlMTEyNDk2MWE0YzRkNjA1Yzg0N2QwMzFiNWUwOTYyZjcxZDBhNDYxIn0="
			}
		}).then((result)=>{
			console.log("2222",result)
		})
	}
  render() {
    return (
      <div className="game">
        helllow react
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
