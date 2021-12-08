import { useState } from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import { Form } from 'informed';
import createComponentRegistry, {
  defaultSubQuestions,
} from '../InternationalRevenue';
import RenderedQuestionInstance from '../RenderedQuestionInstance';

const QuoteComponent = createComponentRegistry().quoteComponent;

function someCode() {

}