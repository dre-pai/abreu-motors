import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

class About extends React.Component {
  render() {
    return (
      <div className="container-md">
        <Row>
          <Col>
            <Image src="images/our-vision-2.jpg" fluid />
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              The 911 Backdate project was inspired by overwhelming feedback
              from our clients expressing a fervent desire to own a fully
              restored and customized classic air-cooled Porsche 911. They are
              members of a new sect of Porsche enthusiasts, one less concerned
              with collecting an air-cooled 911 but more interested in the
              experience and thrill of driving one. To own and drive a classic
              air-cooled Porsche that is uniquely stylized, in all of its
              original mechanical splendor, and blushing with the vitality of
              youth is a life-long dream realized for the avid fan whose first
              indelible Porsche impressions often go back as far as adolescence.
            </p>
            <p>
              The acceptance of any modification to a classic 911 by a tribe so
              staunchly devoted to preservation was initially quite difficult to
              comprehend; however, it gradually became clear to us that this idea
              of a revised Porsche 911 was in effect a form of preservation,
              albeit not in the proverbial sense of the word. The 911 Backdate
              is a marriage of 2 beloved eras of the classic air-cooled 911 –
              the 1970’s ST and the 964 of the 1990’s. We often say we wish we
              knew then what we know now and the pairing of these 2 classic
              Porsche models seamlessly achieves this. The ST was born during a
              period in automotive history prodigious with innovation in
              artistry and design. Its visual appeal is timeless, handsome, and
              distinguished. It has smooth lines and soft curved surfaces
              delicately embellished with staccatos of finely polished mirrors,
              moldings, and trims. Additionally, the wider proportions of its rear view
              creates a visage that is irresistibly likable. The 964 is revered
              for its achievements in race engineering, a culmination of 30
              years of Porsche technical evolution. It is easy to handle, safety
              enhanced, and wickedly fast, delivering the ultimate air-cooled
              911 driving experience.
            </p>
            <p>
              There is a metamorphosis that occurs with the marriage of these
              two classic favorites, and it is spectacular. The end product is a
              complete transformation from a neglected 964 into a fully realized
              and restored machine with a revised exterior and interior
              aesthetic that is truly a reverent homage to the ST of the 1970’s.
              Throughout the restoration, the 964 remains authentic with a
              matching numbers engine rebuild, tasteful performance upgrades,
              and a puritan-like devotion to its veritable history with every
              genuine OEM replacement part. The interior is transformed from a
              rather mundane existence of basic design and materials into a
              salon of rich hand-stitched Italian hides and elegant finishes,
              all the while maintaining respect for the Porsche heritage of
              minimalism and function.
            </p>
            <p>
              The final and stunning bespoke example is the result of a
              successful collaboration with our buyer. It is a treasure that
              will be enjoyed for a lifetime. This is the passion that we share
              with our clients and which compels us to continuously create and
              evolve. We look forward to the inevitable innovation that the next
              911 Backdate will inspire.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src="images/res-interior.jpg" fluid />
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
