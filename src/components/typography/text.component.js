import styled from 'styled-components/native';

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
    padding-right: 0px;
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.text.description};
`;

const titleVariant = (theme) => `
  font-family: ${theme.fonts.monospace};
  font-size: ${theme.fontSizes.h5};
`;

const formLabel = (theme) => `
  font-family: ${theme.fonts.monospace};
  font-size: ${theme.fontSizes.title};
`;

const cardTitle = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: bold;
  font-size: ${theme.fontSizes.body};
`;
const sectionTitle = (theme) => `
  color: ${theme.colors.text.error};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.body};
`;

const buttonTitle = (theme) => `
  color: ${theme.colors.bg.primary};
`;

const variants = {
  body,
  label,
  formLabel,
  caption,
  error,
  titleVariant,
  cardTitle,
  sectionTitle,
  buttonTitle
};

console.log(variants);

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;