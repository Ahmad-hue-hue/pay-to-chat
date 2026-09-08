import Image from 'next/image';
import styles from './OurStory.module.css';

export default function OurStory() {
  return (
      <section className={styles.ourStory}>
        <div className={styles.r1}>
          <div className={styles.r2}>
            <div className={styles.dektop}>
              <div className={styles.tag} data-border="true">
                <div className={styles.icon}>
                  <div className={styles.r6}>
                    <Image className={styles.r7} src="/assets/media/nHQWAkLjayQoAbLHLxTToqw5Yc.svg" alt="Icon" width={21} height={20} />
                  </div>
                </div>
                <div className={styles.text}>
                  <p className={styles.r9}>
                    Our Story
                  </p>
                </div>
              </div>
              <div className={styles.textContainer}>
                <div className={styles.heading}>
                  <h2 className={styles.r12}>
                    Our Journey So Far
                  </h2>
                </div>
                <div className={styles.paragraph}>
                  <p className={styles.r14}>
                    Chat to Pay began with a simple goal: let merchants take payments in the conversations they already have, without changing how they sell.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.subContainer}>
            <div className={styles.container2}>
              <div className={styles.card} data-border="true">
                <div className={styles.number}>
                  <p className={styles.r20}>
                    150k+
                  </p>
                </div>
                <div className={styles.container3}>
                  <div className={styles.heading2}>
                    <h3 className={styles.r23}>
                      Orders Placed
                    </h3>
                  </div>
                  <div className={styles.text2}>
                    <p className={styles.r25}>
                      Every merchant story starts the same way: a buyer asks, a merchant sends a secure checkout link, and the chat turns into a paid order.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.card2} data-border="true">
                <div className={styles.number2}>
                  <p className={styles.r28}>
                    2,400+
                  </p>
                </div>
                <div className={styles.container4}>
                  <div className={styles.heading3}>
                    <h3 className={styles.r31}>
                      Active Merchants
                    </h3>
                  </div>
                  <div className={styles.text3}>
                    <p className={styles.r33}>
                      Boutiques, food corners and freelance sellers rely on Chat to Pay to close sales inside WhatsApp, without an app or a website.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.card} data-border="true">
                <div className={styles.number}>
                  <p className={styles.r20}>
                    98%
                  </p>
                </div>
                <div className={styles.container3}>
                  <div className={styles.heading2}>
                    <h3 className={styles.r23}>
                      Payments Settled
                    </h3>
                  </div>
                  <div className={styles.text2}>
                    <p className={styles.r25}>
                      Buyers pay by card on a hosted checkout page, and merchants watch orders settle into their dashboard in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.line} />
              <div className={styles.circle} />
              <div className={styles.line2} />
              <div className={styles.circle} />
              <div className={styles.line2} />
              <div className={styles.circle} />
              <div className={styles.line} />
            </div>
          </div>
        </div>
      </section>
  );
}
