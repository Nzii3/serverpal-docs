import React from 'react';

import styles from './premium.module.css';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Community() {
  const context = useDocusaurusContext();

  return (
    <Layout title="Premium" description="Check out ServerPal premium to better enhance your server growth!">
      <header className="hero">
        <div className="container text--center">
          <h1 className='gold-cycle'>ServerPal Premium</h1>
          <div className="hero--subtitle">
          <p>
          </p>
          </div>
          <img className={classnames(styles.headerImg)} src="img/logo.png" />
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row margin-vert--lg">
            <div className="col text--center padding-vert--md">
              <div className="card">
                <div className="card__header">
                <FontAwesomeIcon icon="fa-solid fa-gem" style={{'fontSize': '3em'}} bounce />
                </div>
                <div className="card__header">
                <h2>1 Month Subscription ($3.99/month)</h2>
                </div>
                <div className="card__body">
                  <ul style={{'listStylePosition': 'inside'}}>
                  <li>Lower cooldowns for commands</li>
                  <li>Increased applications questions limit</li>
                  <li>7 custom button actions instead of 3</li>
                  <li>7 custom menu option actions instead of 3</li>
                  <li>Other increased limits</li>
                  <li><a href="/support">Premium support</a></li>
                  </ul>
                </div>
                <div className="card__footer">
                  <Link to="https://buy.stripe.com/dRm7sM4XFdpm0LHdC0bjW06" className="button button--outline button--primary button--block">Subscribe</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Community;
