import './BeerIngredientsList.scss';
import { ComponentProps, ReactElement } from 'react';
import BeerIngredients from '../../../helpers/interfaces/BeerIngredients.interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWheatAlt, faBacteria, faBeer, IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface BeerIngredientsListProps extends ComponentProps<'div'> {
  ingredients: BeerIngredients;
}

const BeerIngredientsList = ({ ingredients }: BeerIngredientsListProps) => {
  const buildHopsList = () => {
    return ingredients.hops.map((hop, id) => (
      <div
        className="ingredient"
        key={
          id + hop.name
        }>{`${hop.name}, ${hop.amount.value} ${hop.amount.unit}, ${hop.attribute}`}</div>
    ));
  };

  const buildMaltsList = () => {
    return ingredients.malt.map((malt, id) => (
      <div
        className="ingredient"
        key={id + malt.name}>{`${malt.name}, ${malt.amount.value} ${malt.amount.unit}`}</div>
    ));
  };

  const buildIngredientsRow = (
    icon: IconDefinition,
    label: string,
    content: ReactElement | ReactElement[]
  ) => {
    return (
      <div className="ingredients-row">
        <b>
          <FontAwesomeIcon icon={icon} /> {label}:
        </b>
        {content}
      </div>
    );
  };

  return (
    <div className="beer-ingredients-list-container">
      {!!ingredients.hops.length && buildIngredientsRow(faBeer, 'Hops', buildHopsList())}
      {!!ingredients.malt.length && buildIngredientsRow(faWheatAlt, 'Malt', buildMaltsList())}
      {!!ingredients.yeast &&
        buildIngredientsRow(
          faBacteria,
          'Yeast',
          <div className="ingredient">{ingredients.yeast}</div>
        )}
    </div>
  );
};

export default BeerIngredientsList;