import Button from "./button"

function AccountCard({ account, amount,balance }) {
  return (
    <section class="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{account}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{balance}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button 
          className="button transaction-button"
          text="View transactions"
        />
      </div>
    </section>
  )}

  export default AccountCard