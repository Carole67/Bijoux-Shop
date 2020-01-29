<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * TabUser
 *
 * @ORM\Table(name="tab_user")
 * @ORM\Entity
 */
class TabUser
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="firstname", type="string", length=255, nullable=false)
     */
    private $firstname;

    /**
     * @var string
     *
     * @ORM\Column(name="lastname", type="string", length=255, nullable=false)
     */
    private $lastname;

    /**
     * @var string
     *
     * @ORM\Column(name="gender", type="string", length=1, nullable=false)
     */
    private $gender;

    /**
     * @var string
     *
     * @ORM\Column(name="login", type="string", length=10, nullable=false)
     */
    private $login;

    /**
     * @var string
     *
     * @ORM\Column(name="pwd", type="string", length=255, nullable=false)
     */
    private $pwd;

    /**
     * @var string
     *
     * @ORM\Column(name="address", type="string", length=255, nullable=false)
     */
    private $address;

    /**
     * @var int
     *
     * @ORM\Column(name="zip_code", type="integer", nullable=false)
     */
    private $zipCode;

    /**
     * @var string
     *
     * @ORM\Column(name="city", type="string", length=30, nullable=false)
     */
    private $city;

    /**
     * @var string
     *
     * @ORM\Column(name="country", type="string", length=30, nullable=false)
     */
    private $country;

    /**
     * @var int
     *
     * @ORM\Column(name="phone_number", type="integer", nullable=false)
     */
    private $phoneNumber;

    /**
     * @var string
     *
     * @ORM\Column(name="email_address", type="string", length=20, nullable=false)
     */
    private $emailAddress;


    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set firstname.
     *
     * @param string $firstname
     *
     * @return TabUser
     */
    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;

        return $this;
    }

    /**
     * Get firstname.
     *
     * @return string
     */
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * Set lastname.
     *
     * @param string $lastname
     *
     * @return TabUser
     */
    public function setLastname($lastname)
    {
        $this->lastname = $lastname;

        return $this;
    }

    /**
     * Get lastname.
     *
     * @return string
     */
    public function getLastname()
    {
        return $this->lastname;
    }

    /**
     * Set gender.
     *
     * @param string $gender
     *
     * @return TabUser
     */
    public function setGender($gender)
    {
        $this->gender = $gender;

        return $this;
    }

    /**
     * Get gender.
     *
     * @return string
     */
    public function getGender()
    {
        return $this->gender;
    }

    /**
     * Set login.
     *
     * @param string $login
     *
     * @return TabUser
     */
    public function setLogin($login)
    {
        $this->login = $login;

        return $this;
    }

    /**
     * Get login.
     *
     * @return string
     */
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * Set pwd.
     *
     * @param string $pwd
     *
     * @return TabUser
     */
    public function setPwd($pwd)
    {
        $this->pwd = $pwd;

        return $this;
    }

    /**
     * Get pwd.
     *
     * @return string
     */
    public function getPwd()
    {
        return $this->pwd;
    }

    /**
     * Set address.
     *
     * @param string $address
     *
     * @return TabUser
     */
    public function setAddress($address)
    {
        $this->address = $address;

        return $this;
    }

    /**
     * Get address.
     *
     * @return string
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Set zipCode.
     *
     * @param int $zipCode
     *
     * @return TabUser
     */
    public function setZipCode($zipCode)
    {
        $this->zipCode = $zipCode;

        return $this;
    }

    /**
     * Get zipCode.
     *
     * @return int
     */
    public function getZipCode()
    {
        return $this->zipCode;
    }

    /**
     * Set city.
     *
     * @param string $city
     *
     * @return TabUser
     */
    public function setCity($city)
    {
        $this->city = $city;

        return $this;
    }

    /**
     * Get city.
     *
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Set country.
     *
     * @param string $country
     *
     * @return TabUser
     */
    public function setCountry($country)
    {
        $this->country = $country;

        return $this;
    }

    /**
     * Get country.
     *
     * @return string
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * Set phoneNumber.
     *
     * @param int $phoneNumber
     *
     * @return TabUser
     */
    public function setPhoneNumber($phoneNumber)
    {
        $this->phoneNumber = $phoneNumber;

        return $this;
    }

    /**
     * Get phoneNumber.
     *
     * @return int
     */
    public function getPhoneNumber()
    {
        return $this->phoneNumber;
    }

    /**
     * Set emailAddress.
     *
     * @param string $emailAddress
     *
     * @return TabUser
     */
    public function setEmailAddress($emailAddress)
    {
        $this->emailAddress = $emailAddress;

        return $this;
    }

    /**
     * Get emailAddress.
     *
     * @return string
     */
    public function getEmailAddress()
    {
        return $this->emailAddress;
    }

    /**
     * Parse Doctrine values into Array
     */
    public function intoArray()
    {
        return array(
            'civility' => $this->getGender(),
            'firstName' => $this->getFirstname(),
            'lastName' => $this->getLastname(),
            'address' => $this->getAddress(),
            'zipCode'=>$this->getZipCode(),
            'city'=>$this->getCity(),
            'country'=>$this->getCountry(),
            'phone' => $this->getPhoneNumber(),
            'phoneFormated'=>$this->getPhoneNumber(),
            'mail'=>$this->getEmailAddress(),
            'login'=>$this->getLogin(),
            'password'=>null
        );
    }
}
