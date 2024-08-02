import { useEffect, useState } from "react";
import "./App.css";
import * as Modal from "./components/Modal";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setShouldAnimate(true), 500);
  }, [isVisible]);

  const hideModal = () => {
    setIsVisible(false);
    setShouldAnimate(false);
  };

  return (
    <>
      <button onClick={() => setIsVisible(true)}>Open Modal</button>

      {isVisible && (
        <Modal.Wrapper>
          <Modal.Container isVisible={shouldAnimate}>
            <Modal.Header>My Header</Modal.Header>
            <Modal.Content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                ultrices mauris ac odio tempus aliquam. Maecenas efficitur purus
                in augue volutpat consectetur. Curabitur vehicula bibendum enim,
                ac ultrices nulla vestibulum quis. Vivamus porta quam et dictum
                tempus. Sed rhoncus molestie arcu, quis fringilla nisi bibendum
                tincidunt. Nullam porttitor leo non iaculis finibus. Nam
                lobortis lacus dui, ut venenatis elit varius nec. Proin suscipit
                urna eget lacus facilisis, a dictum lacus sollicitudin. Aenean
                aliquam sed lacus eget semper. In sodales tellus et felis
                egestas elementum. Quisque vel posuere ipsum. Duis euismod
                pulvinar erat a venenatis. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus.{" "}
              </p>
              <p>
                Donec pellentesque turpis sit amet iaculis vestibulum. Praesent
                finibus ligula augue, in pellentesque libero pulvinar vitae.
                Nullam nec nulla pellentesque, sodales ligula vel, laoreet urna.
                Morbi id magna libero. Sed vitae lacus metus. Nulla ut enim vel
                mauris rutrum blandit. Maecenas imperdiet posuere leo vel
                imperdiet.{" "}
              </p>
              <p>
                Nullam et orci ac diam sodales vulputate a consequat nibh. Proin
                interdum sed massa eu mattis. In aliquet purus in nunc gravida,
                a mattis tellus consequat. Duis ut vehicula quam. Proin
                dignissim tellus id lacus laoreet vestibulum. Donec leo sapien,
                bibendum id blandit dapibus, vulputate suscipit risus. In eu
                urna ac nisi pretium malesuada ut a augue. Vestibulum non turpis
                est. Proin rutrum felis neque. Pellentesque lacinia aliquam ex
                sit amet ornare. In et lorem tortor. Phasellus ut placerat sem.
                In hac habitasse platea dictumst. Proin gravida tincidunt enim.
                Cras eget orci sit amet ante laoreet accumsan. Phasellus
                egestas, orci a molestie dignissim, nunc justo convallis justo,
                sed vehicula neque dolor eget arcu.
              </p>
              <p>
                Mauris venenatis elit id hendrerit auctor. Integer lobortis vel
                ligula non tincidunt. Nullam consequat imperdiet enim pharetra
                pellentesque. Nam laoreet nec sem vel dignissim. Quisque mauris
                nisi, pharetra et porta in, mattis egestas nunc. Nunc ornare
                consectetur vehicula. Proin quam nibh, convallis id varius sit
                amet, sollicitudin luctus felis. Donec consequat placerat erat
                at maximus. Aenean fringilla viverra congue.
              </p>
              <p>
                Vestibulum sit amet tortor at lorem pharetra euismod. Nam cursus
                fringilla lacus, eget varius libero ultrices sed. Nunc sodales
                quis felis ac varius. Aliquam scelerisque sem est, a lobortis
                est auctor sed. Nam elementum semper est, in elementum neque
                mollis in. Sed purus elit, tempus quis placerat vitae, tristique
                quis erat. Pellentesque nisl justo, sagittis quis tincidunt vel,
                tempor a massa. Donec feugiat nec mi id congue. In consectetur,
                mauris quis semper dictum, tellus lectus placerat lectus,
                euismod fringilla sapien lectus sit amet urna. Pellentesque
                vestibulum mollis nisl, vitae consequat nibh aliquet ac.
                Curabitur dui risus, lobortis a lectus vel, molestie faucibus
                ante. Mauris fermentum felis tempus laoreet tempor. Praesent
                risus magna, blandit eu viverra in, pretium in neque. Cras
                viverra quam at hendrerit aliquam. Ut id tortor ultricies,
                consectetur nisi vel, bibendum magna. Morbi turpis mi, varius
                eget congue a, condimentum id nisl.{" "}
              </p>
            </Modal.Content>
            <Modal.Footer>
              <button onClick={hideModal}>Close modal</button>
            </Modal.Footer>
          </Modal.Container>
          <Modal.Mask onClick={hideModal} />
        </Modal.Wrapper>
      )}
    </>
  );
}

export default App;
