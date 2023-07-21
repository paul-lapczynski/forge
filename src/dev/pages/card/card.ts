import '$src/shared';
import '@tylertech/forge/card';
import '@tylertech/forge/scaffold';
import '@tylertech/forge/button';
import '@tylertech/forge/button/forge-button.scss';
import '@tylertech/forge/icon-button';
import '@tylertech/forge/icon-button/forge-icon-button.scss';
import './card.scss';
import type { ICardComponent, ISwitchComponent } from '@tylertech/forge';

const card = document.querySelector('.demo-card') as ICardComponent;

const raisedToggle = document.querySelector('#opt-card-raised') as ISwitchComponent;
raisedToggle.addEventListener('forge-switch-select', ({ detail: selected }) => card.raised = selected);

