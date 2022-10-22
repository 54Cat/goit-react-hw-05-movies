import { Notify } from 'components/Notification/NotificationStyled';

export function Error() {
  return (
    <Notify>Error, something went wrong. Please try again.</Notify>
  );
};

export function NoRviews () {
  return (
    <Notify>Sorry, no reviews yet.</Notify>
  );
};