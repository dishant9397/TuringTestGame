/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen, waitFor,fireEvent  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UploadFile from '../game-intro/UploadFile';

describe("Test file uploader", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('check upload button renders', () => {
    const { container } = render(<UploadFile />);

    const fileInputElement = container.getElementsByClassName("fileUpload");

    expect(fileInputElement).toBeTruthy();
  });

  test('check start-reminder renders', () => {
    render(<UploadFile />);
    const startReminder = screen.getByText(/please select the file to upload \(\.tsv only\)/i);
    expect(startReminder).toBeInTheDocument();
  });

  test('check next button disabled while not upload file', () => {
    render(<UploadFile />);
    const nextBtn = screen.getByText(/next/i).closest('button');
    expect(nextBtn).toBeDisabled();
  });

  test('check next button while file already uploaded', async () => {
    render(<UploadFile />);

    const fs = require('fs');
    const sampleBuffer = fs.readFileSync('./src/components/__tests__/sample.tsv');
    const blob = new Blob([sampleBuffer]);
    const file = new File([blob], 'sample.tsv')

    const inputElement = screen.getByTestId(/fileDrop/i);

    userEvent.upload(inputElement, file);
    const nextBtn = screen.getByText(/next/i);

    await waitFor(() =>
      expect(nextBtn).toBeInTheDocument(),
      expect(nextBtn).toBeEnabled()
    );
  });

  test('check specify number of sentences controller renders', () => {
    render(<UploadFile />);
    const spinBtn = screen.getByRole('spinbutton');
    expect(spinBtn).toBeInTheDocument();
  });

  test('check sentences controller updates value', () => {
    const onSubmit = jest.fn();
    render(<UploadFile handleSubmit={onSubmit} />);
    fireEvent.change(screen.getByRole('spinbutton'), { target: { value: 80 } });

    expect(screen.getByRole('spinbutton')).toHaveValue(80);
  });

  test('check next button becomes available after sentences controller updates valid value', () => {
    const onSubmit = jest.fn();
    render(<UploadFile handleSubmit={onSubmit} />);
    fireEvent.change(screen.getByRole('spinbutton'), { target: { value: 80 } });

    const nextBtn = screen.getByText(/next/i);
    expect(nextBtn).toBeEnabled();
  });

  test('check alignment checkbox renders', () => {
    const onSubmit = jest.fn();
    render(<UploadFile handleSubmit={onSubmit} />);

    const originalAlignCheckBox = screen.getByTestId('originalAlignCheckBox');
    expect(originalAlignCheckBox).toBeInTheDocument();
    const referenceAlignCheckBox = screen.getByTestId('referenceAlignCheckBox');
    expect(referenceAlignCheckBox).toBeInTheDocument();
  });

  test('check font picker renders', () => {
    const onSubmit = jest.fn();
    render(<UploadFile handleSubmit={onSubmit} />);
    const container = document.querySelector('#font-picker')

    const fontPicker = container.getElementsByClassName("dropdown-button");
    expect(fontPicker).toBeTruthy();
  });
});


