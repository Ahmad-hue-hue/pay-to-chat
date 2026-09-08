import Image from 'next/image';
import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
  return (
      <section className={styles.whyChooseUs}>
        <div className={styles.r1}>
          <div className={styles.r2}>
            <div className={styles.dektop}>
              <div className={styles.tag} data-border="true">
                <div className={styles.icon}>
                  <div className={styles.r6}>
                    <Image className={styles.r7} src="/assets/media/vVrF4Gbox7WuZ8u7CHXeXfy1A.svg" alt="Icon" width={20} height={20} />
                  </div>
                </div>
                <div className={styles.text}>
                  <p className={styles.r9}>
                    Why us
                  </p>
                </div>
              </div>
              <div className={styles.textContainer}>
                <div className={styles.heading}>
                  <h2 className={styles.r12}>
                    Why Choose Chat to Pay?
                  </h2>
                </div>
                <div className={styles.paragraph}>
                  <p className={styles.r14}>
                    Accept payments where your customers already chat, with a product built for small businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.r1}>
            <div className={styles.r16}>
              <div className={styles.whyChooseUs2} data-border="true">
                <div className={styles.r18} data-border="true">
                  <div className={styles.iconContainer}>
                    <div className={styles.r20}>
                      <Image className={styles.r21} src="/assets/media/PClIz6NpX3vJ3ZxSQg8uckaSRw.svg" alt="Icon" width={29} height={28} />
                    </div>
                  </div>
                </div>
                <div className={styles.textContainer2}>
                  <div className={styles.heading2}>
                    <h3 className={styles.r24}>
                      No App for Customers
                    </h3>
                  </div>
                  <div className={styles.paragraph2}>
                    <p className={styles.r26}>
                      Shoppers pay on a secure hosted page without installing anything or creating an account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.r1}>
            <div className={styles.r27}>
              <div className={styles.whyChooseUs3} data-border="true">
                <div className={styles.r18} data-border="true">
                  <div className={styles.iconContainer}>
                    <div className={styles.r20}>
                      <Image className={styles.r21} src="/assets/media/uFcAXfOmsLntM0Er5NDG9WsEJ5k.svg" alt="Icon" width={29} height={28} />
                    </div>
                  </div>
                </div>
                <div className={styles.textContainer3}>
                  <div className={styles.heading3}>
                    <h3 className={styles.r31}>
                      Built for Merchants
                    </h3>
                  </div>
                  <div className={styles.paragraph3}>
                    <p className={styles.r33}>
                      Manage products and orders in a simple dashboard designed around your daily selling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.r1}>
            <div className={styles.r16}>
              <div className={styles.whyChooseUs2} data-border="true">
                <div className={styles.r18} data-border="true">
                  <div className={styles.iconContainer}>
                    <div className={styles.r20}>
                      <Image className={styles.r21} src="/assets/media/HAQfCWCgS2xxnKQeGg4apRvlvU.svg" alt="Icon" width={29} height={28} />
                    </div>
                  </div>
                </div>
                <div className={styles.textContainer2}>
                  <div className={styles.heading2}>
                    <h3 className={styles.r24}>
                      A Proven Way to Get Paid
                    </h3>
                  </div>
                  <div className={styles.paragraph2}>
                    <p className={styles.r26}>
                      Over 150,000 orders placed and 2,400+ active merchants using Chat to Pay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
