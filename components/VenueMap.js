import styled from 'styled-components'

const MapContainer = styled.div`
  height: 400px;
  margin: 30px 0;
  max-width: 600px;
  overflow: hidden;
  position: relative;
  width: 100%;

  iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

export default () => (
  <MapContainer>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.5411548837283!2d-90.12240628555955!3d29.9351092306856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a504eae2683b%3A0xf8f0f859fbe19271!2sMiller+Hall%2C+New+Orleans%2C+LA+70118!5e0!3m2!1sen!2sus!4v1558576309566!5m2!1sen!2sus" frameBorder="0" style={{ border: 0 }} allowFullScreen title="Google Maps Miller Hall Loyola University"></iframe>
  </MapContainer>
)
