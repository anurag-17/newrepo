import React, { useEffect, useState } from "react";

class Home extends React.Component {
    //const [jumbotron, setJumbotron] = useState();

  constructor(props) {
          super(props);
          this.state = {
                    items: [],
                    isLoaded: false,
                  };
        }


    // Function to collect data
    componentDidMount() {
        fetch("http://localhost:8002/api/home/jumbotron")
        .then((resp) => resp.json())
        .then(data => {
            this.setState({
                isLoaded: true,
                items: data,
            });
         });
    }

    render() {
        let url = null;
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
              return <div>Loading..</div>;
        } else {
            console.log(" _____ ");
            url = items.jumbotron.url;
            return (
                <div>
                    <img src={url} />
                </div>
            );
        }
    }
}

export default Home;
